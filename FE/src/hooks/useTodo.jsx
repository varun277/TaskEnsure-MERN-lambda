import { useState, useEffect, useCallback } from 'react';
import todoService from '../TodoService/TodoService';

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch all todos
    const fetchTodos = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await todoService.getAllTodos();
            setTodos(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [])

    // Create new todo
    const createTodo = async (todoData) => {
        setError(null);
        setLoading(true);
        try {
            const newTodo = await todoService.createTodo(todoData);
            setTodos(prev => [newTodo, ...prev]);
            return newTodo;
        } catch (err) {
            setError(err.message);
            throw err;
        }
        finally {
            setLoading(false);
        }
    };

    // Update todo
    const updateTodo = async (id, todoData) => {
        setError(null);
        setLoading(true);
        try {
            const updatedTodo = await todoService.updateTodo(id, todoData);
            setTodos(prev =>
                prev.map(todo =>
                    todo._id === id ? updatedTodo : todo
                )
            );
            return updatedTodo;
        } catch (err) {
            setError(err.message);
            throw err;
        }
        finally {
            setLoading(false);
        }
    };

    // Delete todo
    const deleteTodo = async (id) => {
        setError(null);
        setLoading(true);
        try {
            await todoService.deleteTodo(id);
            setTodos(prev => prev.filter(todo => todo._id !== id));
        } catch (err) {
            setError(err.message);
            throw err;
        }
        finally {
            setLoading(false);
        }
    };

    // Toggle todo completion
    const toggleTodo = async (id) => {
        setError(null);
        setLoading(true);
        try {
            const updatedTodo = await todoService.toggleTodo(id);
            setTodos(prev =>
                prev.map(todo =>
                    todo._id === id ? updatedTodo : todo
                )
            );
            return updatedTodo;
        } catch (err) {
            setError(err.message);
            throw err;
        }
        finally {
            setLoading(false);
        }
    };

    // Load todos on mount
    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    return {
        todos,
        loading,
        error,
        createTodo,
        updateTodo,
        deleteTodo,
        toggleTodo,
        refreshTodos: fetchTodos
    };
};

export default useTodos;