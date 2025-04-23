const logger = (req, res, next) => {
	const time = new Date().toISOString()

	console.log(`Log API: ${time} - ${req.method} - ${req.originalUrl}`)

	next()
}

module.exports = logger