// pages/index.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../components/Layout';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { fetchTasks } from '../store/actions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch tasks when the component mounts
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <TaskForm />
      <TaskList />
    </Layout>
  );
};

export default Home;

