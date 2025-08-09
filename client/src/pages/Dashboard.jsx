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
import "../assets/style.css"; // 👈 Link to your CSS

const Dashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Default Dashboard", icon: <FaTachometerAlt size={40} className="text-blue-500" /> },
    { title: "Administration", icon: <FaUserShield size={40} className="text-purple-500" /> },
    {
      title: "My Aircraft",
      icon: <FaPlane size={40} className="text-green-500" />,
      route: "/my-aircraft",
    },
    { title: "My Materials", icon: <FaWarehouse size={40} className="text-orange-500" /> },
    { title: "My Resources", icon: <FaUsers size={40} className="text-pink-500" /> },
    { title: "My Financials", icon: <FaCreditCard size={40} className="text-yellow-500" /> },
    { title: "Analytics", icon: <FaChartBar size={40} className="text-teal-500" /> },
    { title: "Chat", icon: <FaComments size={40} className="text-red-500" /> },
  ];

  const handleCardClick = (route) => {
    if (route) navigate(route);
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Hello! User.</h2>

      <div className="dashboard-grid">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(item.route)}
            className={`dashboard-card ${item.route ? "clickable" : ""}`}
          >
            <div className="dashboard-icon">{item.icon}</div>
            <div className="dashboard-title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
