import React from 'react';
import {
  FaTachometerAlt, FaPlane, FaComment, FaMoneyBill, FaSuitcase,
  FaRobot, FaHeadset, FaCog, FaSignOutAlt
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-red-600 text-white flex flex-col justify-between p-4">
      <div>
        <h1 className="text-2xl font-bold mb-6">AviaJet</h1>
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-2 hover:text-gray-200"><FaTachometerAlt /> Dashboard</a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-200"><FaPlane /> Flights Details</a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-200"><FaComment /> Feedback</a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-200"><FaMoneyBill /> Fairs</a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-200"><FaSuitcase /> Baggage Details</a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-200"><FaRobot /> AI Assistance</a>
        </nav>
      </div>
      <div className="space-y-4">
        <a href="#" className="flex items-center gap-2 hover:text-gray-200"><FaHeadset /> Support</a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-200"><FaCog /> Settings</a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-200"><FaSignOutAlt /> Logout</a>
      </div>
    </div>
  );
};

export default Sidebar;
