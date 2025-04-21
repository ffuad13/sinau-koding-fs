const express = require('express')
const PORT = 3030
const path = require('node:path')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.static('public'))

const dataTodos = [
	{id: 1, task: "learn to build API", completed: false},
	{id: 2, task: "learn to build API using express", completed: false},
]

function handleGetTodos(req, res) {
	res.json(dataTodos)
}

app.get('/api/todos', handleGetTodos)
app.post('/api/todos', (req, res) => {
	const {task} = req.body
	if (!task) return res.status(200).json({error: 'Task is required'})

	const lastData = dataTodos[dataTodos.length - 1]
	const ids = lastData.id + 1

	const newTodo = {
		id: ids,
		task: task,
		completed: false
	}

	dataTodos.push(newTodo)
	res.status(201).json(newTodo)
})
app.use('/testing', express.static('public/test'))
app.get('/viewtodo', (req, res) => {
	res.render('todos', {todos: dataTodos})
})




app.listen(PORT, () => {
	console.log('Server is running at localhost on port: ' + PORT)
})