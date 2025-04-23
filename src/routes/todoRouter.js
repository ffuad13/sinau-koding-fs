const express = require('express');
const {handleGetTodos, createTodo, getTodoById, findTask} = require('../controllers/todoController');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/search', findTask)
router.get("/", handleGetTodos)
router.post('/', validateToken, createTodo)
router.get('/:id', getTodoById)

module.exports = router