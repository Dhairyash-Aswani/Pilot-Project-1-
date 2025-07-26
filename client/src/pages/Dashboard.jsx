import React from 'react';
import Layout from '../components/Layout';

const Dashboard = () => {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Hello! User.</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {[
          "Default Dashboard",
          "Administration",
          "My Aircraft",
          "My Materials",
          "My Resources",
          "My Financials",
          "Analytics",
          "Chat"
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow text-center text-xl font-medium">
            {item}
          </div>
        ))}
      </div>
      <div className="bg-green-500 text-white p-4 rounded">
        Tailwind is working!
      </div>
    </Layout>
  );
};

export default Dashboard;
