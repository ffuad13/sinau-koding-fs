const { ApiError } = require("./handlers")

const validateToken = (req, res, next) => {
	try {
		const token = req.headers['authorization'] || ""

		const splittoken = token.split(" ")[1]

		const secretToken = "ini-token"

		if (!splittoken) {
			// return res.status(401).send({message: "no token provided"})
			throw new ApiError(401, "No token provided")
		}

		if (splittoken !== secretToken) {
			// return res.status(403).send({message: "Invalid token, request forbidden"})
			throw new ApiError(403, "Invalid token, request forbidden")
		}

			next()
	} catch (error) {
		next(error)
	}
}

module.exports = validateToken