import React from 'react';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user?.name}!</h1>
        <p className="text-gray-600">Role: {user?.role}</p>
      </div>
    </div>
  );
}

export default Dashboard;
