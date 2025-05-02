const validator = require('validator')
const { ApiError } = require('./handlers')
const db = require('../models/db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


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

	const [rows, fields] = await db.promise().query(sql, values)
	const userData = rows[0]

	if (!userData) {
		throw new ApiError(404, 'Incorrect email. User not found')
	}

	const dataPassword = userData.password
	const comparePassword = bcrypt.compareSync(password, dataPassword)
	if (!comparePassword) {
		throw new ApiError(400, 'Incorrect Password')
	}

	const tokenSign = jwt.sign({id: userData.id, email: userData.email}, process.env.JWT_SECRET, {expiresIn: 3600})

	req.token = tokenSign

	next()

	// db.query(sql, values, (err, rows, fields) => {

	// 	next()
	// });
}

module.exports = {createUserValidator, loginValidator}