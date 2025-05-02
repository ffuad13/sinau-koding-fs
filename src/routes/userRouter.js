const express = require('express')
const { createUser, loginUser, updateUser, deleteUser } = require('../controllers/userController')
const { createUserValidator, loginValidator } = require('../middlewares/validators')
const validateToken = require('../middlewares/validateToken')

const router = express.Router()

router.post('/register', createUserValidator, createUser)
router.post('/login', loginValidator, loginUser)
router.put('/update', validateToken, updateUser)
router.delete('/delete/:id', validateToken, deleteUser)

module.exports = router