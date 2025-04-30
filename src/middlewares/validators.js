const validator = require('validator')
const { ApiError } = require('./handlers')
const db = require('../models/db')
const bcrypt = require('bcryptjs')


const createUserValidator = (req, res, next) => {
	try {
		const {firstName, email, password } = req.body

		if (!firstName || !email || !password) {
			throw new ApiError(400, 'Register failed firstname, email, and password is required')
		}

		const isValidEmail = validator.isEmail(email, {host_whitelist: ['gmail.com', 'yahoo.com']})
		if (!isValidEmail) {
			throw new ApiError(400, "Invalid email format")
		}

		const isStrongPassword = validator.isStrongPassword(password)
		if (!isStrongPassword) {
			throw new ApiError(400, "Password not strong enough. Must be atleast 8 character, include lowercase, uppercase, number, and symbol.")
		}

		next()
	} catch (error) {
		next(error)
	}
}

const loginValidator = async (req, res, next) => {
	const {email, password} = req.body

	const sql = 'SELECT * FROM `users` where email = ?'
	const values = [email]

	db.query(sql, values, (err, rows, fields) => {
		const dataPassword = rows[0].password

		const comparePassword = bcrypt.compareSync(password, dataPassword)
		if (!comparePassword) {
			return res.status(400).send({
				message: 'error, incorrect password'
			})
		}

		next()
	});
}

module.exports = {createUserValidator, loginValidator}