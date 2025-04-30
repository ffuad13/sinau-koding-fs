const express = require('express')
const { createUser, loginUser } = require('../controllers/userController')
const { createUserValidator, loginValidator } = require('../middlewares/validators')

const router = express.Router()

router.post('/register', createUserValidator, createUser)
router.post('/login', loginValidator, loginUser)

module.exports = router