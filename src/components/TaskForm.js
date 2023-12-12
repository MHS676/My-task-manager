// components/TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({ title: '', description: '', category: '' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask({ title: '', description: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-2">Title</label>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
      />

      <label className="block mb-2">Description</label>
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
      />

      <label className="block mb-2">Category</label>
      <input
        type="text"
        name="category"
        value={task.category}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
      />

      <button type="submit" className="bg-blue-500 text-white py-2 px-4">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
