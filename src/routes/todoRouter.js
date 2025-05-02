const express = require('express');
const {handleGetTodos, createTodo, getTodoById, findTask, updatetask, deleteTask} = require('../controllers/todoController');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/search', findTask)
router.get("/", validateToken, handleGetTodos)
router.post('/', validateToken, createTodo)
router.get('/:id', validateToken, getTodoById)
router.put('/update/:idtodo', validateToken, updatetask)
router.delete('/:idtodo', validateToken, deleteTask)

module.exports = router