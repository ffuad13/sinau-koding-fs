const { ApiError } = require("./handlers")
const jwt = require('jsonwebtoken')


const validateToken = (req, res, next) => {
	try {
		const token = req.headers['authorization'] || ""

		const splittoken = token.split(" ")[1]

		if (!splittoken) {
			// return res.status(401).send({message: "no token provided"})
			throw new ApiError(401, "No token provided")
		}

		const checkToken = jwt.verify(splittoken, process.env.JWT_SECRET)

		if (!checkToken) {
			// return res.status(403).send({message: "Invalid token, request forbidden"})
			throw new ApiError(403, "Invalid token, request forbidden")
		}

		req.user = checkToken

		next()
	} catch (error) {
		next(error)
	}
}

module.exports = validateToken