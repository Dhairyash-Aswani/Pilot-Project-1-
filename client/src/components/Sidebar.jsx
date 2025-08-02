import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaPlane,
  FaComment,
  FaMoneyBill,
  FaSuitcase,
  FaRobot,
  FaHeadset,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoadingLogo from "./LoadingLogo";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    localStorage.removeItem("user");

    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <aside
        className={`h-full w-64 bg-white shadow-md flex flex-col justify-between ${
          isLoading ? "blur-sm" : ""
        }`}
      >
        {/* Top Logo */}
        <div className="flex flex-col">
          <div className="p-6 flex justify-center">
            <img
              src={logo}
              alt="AVA JET Logo"
              className="h-12 object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-1 px-4">
            <SidebarLink
              icon={<FaTachometerAlt />}
              label="Dashboard"
              onClick={() => navigate("/dashboard")}
            />
            <SidebarLink icon={<FaPlane />} label="Flights Details" />
            <SidebarLink icon={<FaComment />} label="Feedback" />
            <SidebarLink icon={<FaMoneyBill />} label="Fairs" />
            <SidebarLink icon={<FaSuitcase />} label="Baggage Details" />
            <SidebarLink icon={<FaRobot />} label="AI Assistance" />
          </nav>
        </div>

        {/* Footer Options */}
        <div className="px-4 py-4 flex flex-col gap-1 border-t border-gray-200">
          <SidebarLink icon={<FaHeadset />} label="Support" />
          <SidebarLink icon={<FaCog />} label="Settings" />
          <SidebarLink icon={<FaSignOutAlt />} label="Logout" onClick={handleLogout} />
        </div>
      </aside>

      {isLoading && <LoadingLogo size={80} />}
    </>
  );
};

const SidebarLink = ({ icon, label, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-gray-700 hover:bg-red-100 hover:text-red-500 transition-colors"
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default Sidebar;
