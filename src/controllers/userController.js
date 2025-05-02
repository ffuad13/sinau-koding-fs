const { ApiError } = require('../middlewares/handlers')
const db = require('../models/db')
const bcrypt = require('bcryptjs')

const createUser = async (req, res) => {
	const {firstName,lastName, email, password } = req.body

	const hashPassword = bcrypt.hashSync(password, 10)

	const sql = 'INSERT INTO `users`(`first_name`, `last_name`, `email`, `password`) VALUES (?, ?, ?, ?)';
  const values = [firstName, lastName, email, hashPassword];

  await db.execute(sql, values);

	res.status(201).send({
		message: 'success'
	})
}

const loginUser = async (req, res) => {
	const {token} = req

	return res.status(200).send({
		message: 'Login Success',
		data: token
	})
}

const updateUser = async (req, res, next) => {
	try {
		const {id} = req.user
		const {firstName,lastName, email } = req.body

		const sql = 'SELECT * FROM `users` where id = ?'
		const values = [id]

		const [rows, fields] = await db.promise().query(sql, values)
		const userData = rows[0]
		if (!userData) {
			throw new ApiError(404, "User not found")
		}

		const updateSql = 'UPDATE `users` SET first_name = (?), last_name = (?), email = (?)';
		const updateValues = [firstName, lastName, email];

		await db.promise().query(updateSql, updateValues)
		const [rows1, fields1] = await db.promise().query(sql, values)

		return res.status(200).send({
			message: "Update data success",
			data: rows1
		})
	} catch (error) {
		next(error)
	}
}

const deleteUser = async (req, res, next) => {
	try {
		const {id} = req.params

		const sql = 'SELECT * FROM `users` where id = ?'
		const values = [id]

		const [rows, fields] = await db.promise().query(sql, values)
		const userData = rows[0]
		if (!userData) {
			throw new ApiError(404, "User not found")
		}

		const updateSql = 'DELETE from `users` WHERE id = (?)';
		const updateValues = [id];

		await db.promise().query(updateSql, updateValues)

		return res.status(204).send({
			message: "Delet data success",
		})
	} catch (error) {
		next(error)
	}
}

module.exports = {createUser, loginUser, updateUser, deleteUser}