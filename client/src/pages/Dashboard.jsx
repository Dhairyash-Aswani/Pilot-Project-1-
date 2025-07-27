import React from "react";
import {
  FaTachometerAlt,
  FaUserShield,
  FaPlane,
  FaWarehouse,
  FaUsers,
  FaCreditCard,
  FaChartBar,
  FaComments,
} from "react-icons/fa";

const Dashboard = () => {
  const menuItems = [
    { title: "Default Dashboard", icon: <FaTachometerAlt size={30} className="text-gray-700" /> },
    { title: "Administration", icon: <FaUserShield size={30} className="text-gray-700" /> },
    { title: "My Aircraft", icon: <FaPlane size={30} className="text-gray-700" /> },
    { title: "My Materials", icon: <FaWarehouse size={30} className="text-gray-700" /> },
    { title: "My Resources", icon: <FaUsers size={30} className="text-gray-700" /> },
    { title: "My Financials", icon: <FaCreditCard size={30} className="text-gray-700" /> },
    { title: "Analytics", icon: <FaChartBar size={30} className="text-gray-700" /> },
    { title: "Chat", icon: <FaComments size={30} className="text-gray-700" /> },
  ];

  return (
    <div className="p-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Hello! User.</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md px-6 py-8 flex flex-col items-center justify-center text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {item.icon}
            <div className="mt-4 text-lg font-medium text-gray-900">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
