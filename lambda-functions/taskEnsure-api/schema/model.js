const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"]
    },
    date: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "completed"]
    },
    backgroundColor: {
        type: String
    },
})

module.exports = mongoose.model('todo', todoSchema);