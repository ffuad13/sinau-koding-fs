const validateToken = (req, res, next) => {
	const token = req.headers['authorization'] || ""

	const splittoken = token.split(" ")[1]

	const secretToken = "ini-token"

	if (!splittoken) {
		return res.status(401).send({message: "no token provided"})
	}

	if (splittoken !== secretToken) return res.status(403).send({message: "Invalid token, request forbidden"})

	next()
}

module.exports = validateToken