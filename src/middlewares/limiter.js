const {rateLimit} = require('express-rate-limit')

exports.limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 50,
	message: {
		status: 'error', message: "Too many request, Please try again later."
	}
})

exports.limiterUser = rateLimit({
	windowMs: 10 * 60 * 1000,
	max: 50,
	message: {
		status: 'error', message: "Too many request, Please try again later."
	}
})