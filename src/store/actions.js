// store/actions.js
import { fetchTasks as fetchTasksAPI, addTask as addTaskAPI, editTask as editTaskAPI, deleteTask as deleteTaskAPI } from '../utils/api';


// ... (existing code)
export const fetchTasks = () => async (dispatch) => {
  try {
    const tasks = await fetchTasksAPI();
    dispatch({ type: 'FETCH_TASKS', payload: tasks });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};
export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await deleteTaskAPI(taskId);
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};


export const addTask = (task) => async (dispatch) => {
  try {
    const addedTask = await addTaskAPI(task);
    dispatch({ type: 'ADD_TASK', payload: addedTask });
  } catch (error) {
    console.error('Error adding task:', error);
  }
};

export const editTask = (taskId, updatedTask) => async (dispatch) => {
  try {
    const editedTask = await editTaskAPI(taskId, updatedTask);
    dispatch({ type: 'EDIT_TASK', payload: { taskId, editedTask } });
  } catch (error) {
    console.error('Error editing task:', error);
  }
};
export const filterTasksByCategory = (category) => ({
  type: 'FILTER_TASKS_BY_CATEGORY',
  payload: category,
});

// ... (existing code)




