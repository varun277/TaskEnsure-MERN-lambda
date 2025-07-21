const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const connectDb = require('./Config/database');
const todoRoutes = require('./routes/todoRoutes');
require('dotenv').config();

const app = express();

// Connect to database immediately when module loads
let dbConnectionPromise = null;

const initializeDatabase = async () => {
    if (!dbConnectionPromise) {
        dbConnectionPromise = connectDb();
    }
    return dbConnectionPromise;
};

// Initialize database connection immediately
initializeDatabase().catch(console.error);

// CORS configuration
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://taskensure-mern-todo.netlify.app'
    ],
    credentials: true
}));

app.use(express.json());
app.use('/api/todos', todoRoutes);

// Health check route
app.get('/api/health', (req, res) => {
    res.json({ message: 'Todo API is running on Lambda!' });
});

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Todo API Lambda Function',
        timestamp: new Date().toISOString()
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Handle Error
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Export for Lambda with binary media type support
module.exports.api = serverless(app, {
    binary: ['image/*', 'application/*']
});