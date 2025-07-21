const Todo = require('../schema/model');

// Controller

// Get all todos
const getTodos = async (req, resp, next) => {
    try {
        const todos = await Todo.find({});
        resp.json(todos)
    }
    catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}

const getSingleTodo = async (req, resp, next) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            resp.status(500).json({
                error: "Todo not found"
            })
        }
        resp.json(todo)
    }
    catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}

const createTodo = async (req, resp, next) => {
    try {
        const { title, description, priority, date, status, backgroundColor } = req.body;
        if (!title) {
            resp.status(400).json({
                error: "Title is required"
            })
        }
        const todo = new Todo({
            title,
            description,
            date: date ? new Date(date) : null,
            priority,
            status,
            backgroundColor
        })
        const savedTodo = await todo.save();
        resp.status(201).json(savedTodo);
    }
    catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}

const updateTodo = async (req, resp, next) => {
    try {
        const { title, description, priority, date, status } = req.body

        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            resp.status(500).json({
                error: "Todo not found"
            })
        }
        //  Update the todo
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id,
            {
                title: title || todo?.title,
                description: description !== undefined ? description : todo?.description,
                priority: priority || todo?.priority,
                status: status || todo?.status,
                backgroundColor: todo?.backgroundColor,
                date: date !== undefined ? new Date(date) : todo?.date
            },
            {
                new: true
            }
        );
        resp.json(updatedTodo)
    }
    catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}

// Delete todo
const deleteTodo = async (req, resp) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return resp.status(404).json({ error: 'Todo not found' });
        }

        await Todo.findByIdAndDelete(req.params.id);
        resp.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
};

module.exports = { getTodos, getSingleTodo, updateTodo, deleteTodo, createTodo }