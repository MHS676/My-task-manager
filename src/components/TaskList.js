// components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './TaskItem';
import { filterTasksByCategory } from '../store/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.activeCategory ? state.filteredTasks : state.tasks);
  const dispatch = useDispatch();

  const handleFilter = (category) => {
    dispatch(filterTasksByCategory(category));
  };

  return (
    <div>
      <div className="mb-4">
        <button className="mr-2" onClick={() => handleFilter(null)}>
          All
        </button>
        <button className="mr-2" onClick={() => handleFilter('Category1')}>
          Category 1
        </button>
        <button onClick={() => handleFilter('Category2')}>
          Category 2
        </button>
      </div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;

