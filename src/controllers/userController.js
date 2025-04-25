const db = require('../models/db')

const createUser = async (req, res) => {
	const {firstName,lastName, email, password } = req.body

	const sql = 'INSERT INTO `users`(`first_name`, `last_name`, `email`, `password`) VALUES (?, ?, ?, ?)';
  const values = [firstName, lastName, email, password];

  await db.execute(sql, values);

	res.status(201).send({
		message: 'success'
	})
}

module.exports = {createUser}