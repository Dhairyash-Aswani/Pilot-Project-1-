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
    {
      title: "Default Dashboard",
      icon: <FaTachometerAlt size={50} className="text-blue-500" />,
      hoverColor: "hover:bg-blue-50",
    },
    {
      title: "Administration",
      icon: <FaUserShield size={50} className="text-purple-500" />,
      hoverColor: "hover:bg-purple-50",
    },
    {
      title: "My Aircraft",
      icon: <FaPlane size={50} className="text-green-500" />,
      hoverColor: "hover:bg-green-50",
    },
    {
      title: "My Materials",
      icon: <FaWarehouse size={50} className="text-orange-500" />,
      hoverColor: "hover:bg-orange-50",
    },
    {
      title: "My Resources",
      icon: <FaUsers size={50} className="text-pink-500" />,
      hoverColor: "hover:bg-pink-50",
    },
    {
      title: "My Financials",
      icon: <FaCreditCard size={50} className="text-yellow-500" />,
      hoverColor: "hover:bg-yellow-50",
    },
    {
      title: "Analytics",
      icon: <FaChartBar size={50} className="text-teal-500" />,
      hoverColor: "hover:bg-teal-50",
    },
    {
      title: "Chat",
      icon: <FaComments size={50} className="text-red-500" />,
      hoverColor: "hover:bg-red-50",
    },
  ];

  return (
    <div className="ml-64 mt-24 px-10 w-[calc(100%-16rem)]">
      {/* Greeting */}
      <h2 className="text-4xl font-bold mb-12 text-center">Hello! User.</h2>

      {/* Grid - always 4 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-lg p-10 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 ${item.hoverColor}`}
          >
            {item.icon}
            <span className="text-xl font-semibold mt-4">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
