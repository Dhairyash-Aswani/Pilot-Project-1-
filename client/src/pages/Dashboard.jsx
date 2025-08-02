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
    { title: "Default Dashboard", icon: <FaTachometerAlt size={26} /> },
    { title: "Administration", icon: <FaUserShield size={26} /> },
    { title: "My Aircraft", icon: <FaPlane size={26} /> },
    { title: "My Materials", icon: <FaWarehouse size={26} /> },
    { title: "My Resources", icon: <FaUsers size={26} /> },
    { title: "My Financials", icon: <FaCreditCard size={26} /> },
    { title: "Analytics", icon: <FaChartBar size={26} /> },
    { title: "Chat", icon: <FaComments size={26} /> },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Hello! User.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md px-6 py-8 flex flex-col items-center justify-center text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="text-red-500">{item.icon}</div>
            <div className="mt-4 text-base font-semibold text-gray-700">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
