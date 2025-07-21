const express = require('express');
const router = express.Router();

const { getTodos, getSingleTodo, updateTodo, deleteTodo, createTodo } = require('../controller/todoController');

// GET -> /api/todos - Get all todos
router.get('/', getTodos);

// POST -> /api/todos - Create a new todo
router.post('/', createTodo)

// GET -> /api/todos/:id - Get a single todo
router.get('/:id', getSingleTodo)

// PUT -> /api/todos/:id
router.put('/:id', updateTodo);

// DELETE -> /api/todos/:id
router.delete('/:id', deleteTodo);

module.exports = router