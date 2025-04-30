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
	const token = 'ini-token'

	return res.status(200).send({
		message: 'Login Success',
		data: token
	})
}

module.exports = {createUser, loginUser}