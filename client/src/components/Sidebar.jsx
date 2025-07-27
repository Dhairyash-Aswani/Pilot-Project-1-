import React from "react";
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
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-[#FF4B2B] text-white flex flex-col justify-between shadow-lg overflow-y-auto">
      
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
          <SidebarLink icon={<FaTachometerAlt />} label="Dashboard" />
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
        <SidebarLink icon={<FaSignOutAlt />} label="Logout" />
      </div>
    </aside>
  );
};

// REUSABLE LINK
const SidebarLink = ({ icon, label }) => (
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#e03b1f] cursor-pointer transition">
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default Sidebar;
