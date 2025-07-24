import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import DashboardCards from '../components/DashboardCards';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Topbar />
        <main className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Hello! User.</h2>
          <DashboardCards />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
