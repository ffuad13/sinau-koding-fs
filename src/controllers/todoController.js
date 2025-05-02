const { ApiError } = require('../middlewares/handlers')
const {todoDB} = require('../models/mongoDB')

// const dataTodos = [
// 	{id: 1, task: "learn to build API", completed: false},
// 	{id: 2, task: "learn to build API using express", completed: false},
// 	{id: 3, task: "Membaca", completed: true},
// ]

const handleGetTodos = async (req, res, next) => { //Read
	try {
		const idUser = req.user.id

		const dataTodos = await todoDB.find({
			userId: idUser
		})

		if(!dataTodos) {
			throw new ApiError(404, 'Data todo Not found')
		}

		return res.status(200).send({
			message: 'All data todo found',
			data: dataTodos
		})
	} catch (error) {
		next(error)
	}
}

const createTodo = async (req, res) => { //Create
	const {task} = req.body //untuk membaca request body
	const idUser = req.user.id
	if (!task) return res.status(400).json({error: 'Task is required'})

	// const lastData = dataTodos[dataTodos.length - 1]
	// const ids = lastData.id + 1

	const newTodo = {
		userId: idUser,
		task: task,
		completed: false
	}


	await todoDB.create(newTodo)
	res.status(201).json(newTodo)
}

const getTodoById = async (req, res,next) => { //Read
	try {
		const {id} = req.params
		const data = await todoDB.findById(id)

		if (!data) {
			throw new ApiError(404, 'Data not found')
		}


		return res.status(200).send({message: 'success', data: data})
	} catch (error) {
		next(error)
	}
}

const updatetask = async (req, res, next) => {
	try {
		const {id} = req.user
		const {idtodo} = req.params
		const {task, completed} = req.body

		const isExist = await todoDB.findOne({_id: idtodo, userId: id})
		console.log(isExist)
		if (!isExist) {
			throw new ApiError(404, `Data with id ${idtodo} is not found`)
		}

		const data = await todoDB.findByIdAndUpdate(idtodo, {task: task, completed: completed})

		return res.status(200).send({
			message: 'data is updated',
			data: data
		})
	} catch (error) {
		next(error)
	}
}

const deleteTask = async (req, res, next) => {
	try {
		const {id} = req.user
		const {idtodo} = req.params

		const isExist = await todoDB.findOne({_id: idtodo, userId: id})
		console.log(isExist)
		if (!isExist) {
			throw new ApiError(404, `Data with id ${idtodo} is not found`)
		}

		await todoDB.findByIdAndDelete(idtodo)


		return res.status(204).send({
			message: 'data todo deleted'
		})
	} catch (error) {
		next(error)
	}
}

const findTask = (req, res) => {
	const {completed, task} = req.query

	const data = dataTodos.filter((el) => el.completed.toString() === completed)

	return res.status(200).send({message: 'find', data: data})
}

module.exports = {handleGetTodos, createTodo, getTodoById, findTask, updatetask, deleteTask}