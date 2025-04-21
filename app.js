const express = require('express')
const PORT = 3030

const app = express()

app.use(express.json())
app.use(express.static('public'))

const dataTodos = [
	{id: 1, task: "learn to build API", completed: false},
	{id: 2, task: "learn to build API using express", completed: false}
]

function handleGetTodos(req, res) {
	res.json(dataTodos)
}

app.get('/api/todos', handleGetTodos)



app.listen(PORT, () => {
	console.log('Server is running at localhost on port: ' + PORT)
})