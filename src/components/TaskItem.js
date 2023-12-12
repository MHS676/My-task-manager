// components/TaskItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../store/actions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ title: task.title, description: task.description, category: task.category });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask(task.id, editedTask));
    setEditing(false);
  };

  const handleCancel = () => {
    setEditedTask({ title: task.title, description: task.description, category: task.category });
    setEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  return (
    <div className="border p-4 mb-4">
      {isEditing ? (
        <>
          {/* ... (existing code) */}
          <label className="block mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={editedTask.category}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
          />
          {/* ... (existing code) */}
        </>
      ) : (
        <>
          {/* ... (existing code) */}
          <p>Category: {task.category}</p>
          {/* ... (existing code) */}
        </>
      )}
    </div>
  );
};

export default TaskItem;
