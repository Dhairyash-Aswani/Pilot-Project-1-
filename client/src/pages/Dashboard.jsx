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
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Default Dashboard", icon: <FaTachometerAlt size={36} className="text-blue-500" /> },
    { title: "Administration", icon: <FaUserShield size={36} className="text-purple-500" /> },
    {
      title: "My Aircraft",
      icon: <FaPlane size={36} className="text-green-500" />,
      route: "/my-aircraft", // 👈 define the route here
    },
    { title: "My Materials", icon: <FaWarehouse size={36} className="text-orange-500" /> },
    { title: "My Resources", icon: <FaUsers size={36} className="text-pink-500" /> },
    { title: "My Financials", icon: <FaCreditCard size={36} className="text-yellow-500" /> },
    { title: "Analytics", icon: <FaChartBar size={36} className="text-teal-500" /> },
    { title: "Chat", icon: <FaComments size={36} className="text-red-500" /> },
  ];

  const handleCardClick = (route) => {
    if (route) navigate(route);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Hello! User.</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(item.route)} // ✅ only clickable if `route` exists
            className={`bg-white rounded-xl shadow-md px-6 py-10 flex flex-col items-center justify-center text-center hover:shadow-xl hover:scale-105 transition-all duration-300 ${item.route ? 'cursor-pointer' : ''}`}
          >
            <div className="mb-4">{item.icon}</div>
            <div className="text-lg font-semibold text-gray-800">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
