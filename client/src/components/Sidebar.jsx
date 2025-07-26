import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-[#FF4B2B] text-white z-20 shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">AVA JET</h1>
        <ul className="space-y-4">
          <li>Dashboard</li>
          <li>Flights</li>
          <li>Feedback</li>
          <li>Fairs</li>
          <li>Baggage</li>
          <li>AI Assistance</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
