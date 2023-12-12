import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      {children}
    </div>
  );
};

export default Layout;
