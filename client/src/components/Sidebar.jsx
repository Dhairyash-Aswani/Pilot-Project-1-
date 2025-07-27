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
import logo from "../assets/logo.png"; // ✅ Adjust path if needed

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-red-600 text-white flex flex-col justify-between shadow-lg">
      
      {/* ✅ TOP SECTION */}
      <div>
        {/* ✅ Centered Logo */}
        <div className="p-4 flex justify-center">
          <img
            src={logo}
            alt="AVA JET Logo"
            className="w-40 max-w-[10rem] h-auto object-contain"
          />
        </div>

        {/* ✅ Divider line */}
        <div className="border-t border-red-400 my-2 mx-6"></div>

        {/* ✅ Main Menu Links */}
        <nav className="px-4 space-y-2 mt-4">
          <SidebarLink icon={<FaTachometerAlt />} label="Dashboard" />
          <SidebarLink icon={<FaPlane />} label="Flights Details" />
          <SidebarLink icon={<FaComment />} label="Feedback" />
          <SidebarLink icon={<FaMoneyBill />} label="Fairs" />
          <SidebarLink icon={<FaSuitcase />} label="Baggage Details" />
          <SidebarLink icon={<FaRobot />} label="AI Assistance" />
        </nav>
      </div>

      {/* ✅ BOTTOM SECTION */}
      <div className="px-4 pb-6 space-y-2">
        <SidebarLink icon={<FaHeadset />} label="Support" />
        <SidebarLink icon={<FaCog />} label="Settings" />
        <SidebarLink icon={<FaSignOutAlt />} label="Logout" />
      </div>
    </aside>
  );
};

// ✅ Reusable Sidebar Link Component
const SidebarLink = ({ icon, label }) => (
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-700 cursor-pointer transition">
    <span className="text-lg">{icon}</span>
    <span className="text-base">{label}</span>
  </div>
);

export default Sidebar;
