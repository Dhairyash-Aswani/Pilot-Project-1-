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
import LoadingLogo from "./LoadingLogo"; // ✅ Import the correct component
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
        className={`fixed top-0 left-0 h-screen w-64 bg-[#FF4B2B] text-white flex flex-col justify-between shadow-lg overflow-y-auto ${
          isLoading ? "blur-[2px]" : ""
        }`}
      >
        {/* TOP SECTION */}
        <div className="flex flex-col">
          <div className="p-6 flex justify-center">
            <img
              src={logo}
              alt="AVA JET Logo"
              className="max-w-[140px] h-auto object-contain"
            />
          </div>

          {/* MAIN LINKS */}
          <nav className="flex flex-col gap-2 px-4">
            <SidebarLink icon={<FaTachometerAlt />} label="Dashboard" onClick={() => navigate("/dashboard")} />
            <SidebarLink icon={<FaPlane />} label="Flights Details" />
            <SidebarLink icon={<FaComment />} label="Feedback" />
            <SidebarLink icon={<FaMoneyBill />} label="Fairs" />
            <SidebarLink icon={<FaSuitcase />} label="Baggage Details" />
            <SidebarLink icon={<FaRobot />} label="AI Assistance" />
          </nav>
        </div>

        {/* BOTTOM SECTION */}
        <div className="px-4 pb-6 flex flex-col gap-2">
          <SidebarLink icon={<FaHeadset />} label="Support" />
          <SidebarLink icon={<FaCog />} label="Settings" />
          <SidebarLink icon={<FaSignOutAlt />} label="Logout" onClick={handleLogout} />
        </div>
      </aside>

      {/* Loading Overlay */}
      {isLoading && <LoadingLogo size={80} />}
    </>
  );
};

const SidebarLink = ({ icon, label, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center gap-3 p-2 rounded-md hover:bg-[#e03b1f] cursor-pointer transition"
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default Sidebar;
