const dataTodos = [
	{id: 1, task: "learn to build API", completed: false},
	{id: 2, task: "learn to build API using express", completed: false},
	{id: 3, task: "Membaca", completed: true},
]

const handleGetTodos = (req, res) => {
	res.json(dataTodos)
}

const createTodo = (req, res) => {
	const {task} = req.body //untuk membaca request body
	if (!task) return res.status(400).json({error: 'Task is required'})

	const lastData = dataTodos[dataTodos.length - 1]
	const ids = lastData.id + 1

	const newTodo = {
		id: ids,
		task: task,
		completed: false
	}

	dataTodos.push(newTodo)
	res.status(201).json(newTodo)
}

const getTodoById = (req, res) => {
	const {id} = req.params
	const data = dataTodos[id - 1]

	if (!data) return res.status(404).send({message: 'Data not found', data: null})

	return res.status(200).send({message: 'success', data: data})
}

const findTask = (req, res) => {
	const {completed, task} = req.query

	const data = dataTodos.filter((el) => el.completed.toString() === completed)

	return res.status(200).send({message: 'find', data: data})
}

module.exports = {handleGetTodos, createTodo, getTodoById, findTask}