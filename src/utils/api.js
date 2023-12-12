// utils/api.js
import axios from 'axios';

const API_BASE_URL = 'https://127.0.0.1'; // Replace with your actual API endpoint

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchTasks = async () => {
  try {
    const response = await api.get('/tasks');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const addTaskAPI = async (task) => {
  try {
    const response = await api.post('/tasks', task);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

// ... (other API methods)

export const editTaskAPI = async (taskId, updatedTask) => {
  try {
    const response = await api.put(`/tasks/${taskId}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error('Error editing task:', error);
    throw error;
  }
};

export const deleteTaskAPI = async (taskId) => {
  try {
    await api.delete(`/tasks/${taskId}`);
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};
