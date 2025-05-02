const errorHandler = (err, req, res, next) => {
	console.error(err.stack)

	const statusCode = err.statusCode || 500
	const message = err.message || 'Internal Server Error'

	return res.status(statusCode).send({
		errors: [
			{
				status: statusCode.toString(),
				title: message,
				// detail: err.stack
			}
		]
	})
}

class ApiError extends Error {
	constructor(statusCode, message) {
		super(message)
		this.statusCode = statusCode
		this.message = message
		this.name = 'ApiError'
		Error.captureStackTrace(this, this.constructor)
	}
}

module.exports = {errorHandler, ApiError}