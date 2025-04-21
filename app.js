const http = require('node:http')
const url = require('node:url')
const fs = require('node:fs')

const PORT = 3030

const API_ENDPOINT = '/api/todos'
const dataTodos = [
	{id: 1, task: "learn to build API", completed: false}
]

function handleGetTodos(req, res) {
	res.writeHead(200, {"Content-Type": 'application/json'})
	res.end(JSON.stringify(dataTodos))
}

const handleError = (res, statusCode, message) => {
	res.writeHead(statusCode, {"Content-Type": 'application/json'})
	res.end(JSON.stringify({error: message}))
}

const handleStaticFiles = (req, res, path) => {
	const filePath = path === '/' ? './public/index.html' : './public' + path

	fs.readFile(filePath, (err, content) => {
		if (err) {
			if (err.code === 'ENOENT') {
				handleError(res, 404, 'File not found')
			} else {
				handleError(res, 500, "Internal server error")
				console.log(err)
			}
		} else {
			let contentType = 'text/html'
			if (filePath.endsWith('.js')) {
				contentType = 'text/javascript'
			} else if (filePath.endsWith('.css')) {
				contentType = 'text/css'
			}

			res.writeHead(200, {"Content-Type": contentType})
			res.end(content, 'utf-8')
		}
	})
}

const handleRequest = (req, res) => {
	const parsedURL = url.parse(req.url, true)
	const path = parsedURL.pathname
	const method = req.method

	if (method === 'OPTIONS') {
		res.writeHead(204)
		res.end()
		return
	}

	if (path === API_ENDPOINT) {
		switch (method) {
			case 'GET':
				handleGetTodos(req, res)
				break;
			default:
				handleError(res, 405, "Method not Allowed")
		}
	} else {
		handleStaticFiles(req, res, path)
	}
}

const server = http.createServer(handleRequest)
server.listen(PORT, () => {
	console.log('Server is running on port: ' + PORT)
})