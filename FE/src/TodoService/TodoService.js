import axios from 'axios';

const API_URL = import.meta.env.VITE_BE_API_URI || 'http://localhost:3001/dev/api';

const todoService = {
    // Get all todos
    getAllTodos: async () => {
        try {
            const response = await axios.get(`${API_URL}/todos`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to fetch todos');
        }
    },

    // Get single todo
    getTodo: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/todos/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to fetch todo');
        }
    },

    // Create new todo
    createTodo: async (todoData) => {
        try {
            const response = await axios.post(`${API_URL}/todos`, todoData);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to create todo');
        }
    },

    // Update todo
    updateTodo: async (id, todoData) => {
        try {
            const response = await axios.put(`${API_URL}/todos/${id}`, todoData);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to update todo');
        }
    },

    // Delete todo
    deleteTodo: async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/todos/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to delete todo');
        }
    },

    // Toggle todo completion
    toggleTodo: async (id) => {
        try {
            const response = await axios.patch(`${API_URL}/todos/${id}/toggle`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to toggle todo');
        }
    }
};

export default todoService;