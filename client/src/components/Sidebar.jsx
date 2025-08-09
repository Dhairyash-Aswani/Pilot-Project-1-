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
import { useNavigate, useLocation } from "react-router-dom";
import LoadingLogo from "./LoadingLogo";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    localStorage.removeItem("user");
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 1000);
  };

  const links = [
    { label: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { label: "Flights Details", icon: <FaPlane />, path: "/flights" },
    { label: "Feedback", icon: <FaComment />, path: "/feedback" },
    { label: "Fairs", icon: <FaMoneyBill />, path: "/fairs" },
    { label: "Baggage Details", icon: <FaSuitcase />, path: "/baggage" },
    { label: "AI Assistance", icon: <FaRobot />, path: "/ai" },
  ];

  const bottomLinks = [
    { label: "Support", icon: <FaHeadset />, path: "/support" },
    { label: "Settings", icon: <FaCog />, path: "/settings" },
    { label: "Logout", icon: <FaSignOutAlt />, action: handleLogout },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <aside className={`sidebar ${isLoading ? "blur-[2px]" : ""}`}>
        {/* Logo */}
        <div className="sidebar-top">
          <img src={logo} alt="AVA JET Logo" className="sidebar-logo" />
        </div>

        {/* Main Navigation */}
        <nav className="sidebar-links">
          {links.map((link) => (
            <SidebarLink
              key={link.label}
              icon={link.icon}
              label={link.label}
              onClick={() => navigate(link.path)}
              active={isActive(link.path)}
            />
          ))}
        </nav>

        {/* Bottom Links */}
        <div className="sidebar-bottom">
          {bottomLinks.map((link) => (
            <SidebarLink
              key={link.label}
              icon={link.icon}
              label={link.label}
              onClick={link.action || (() => navigate(link.path))}
              active={isActive(link.path)}
            />
          ))}
        </div>
      </aside>

      {isLoading && <LoadingLogo size={80} />}
    </>
  );
};

const SidebarLink = ({ icon, label, onClick, active }) => (
  <div
    className={`sidebar-link ${active ? "active" : ""}`}
    onClick={onClick}
  >
    <span className="sidebar-icon">{icon}</span>
    <span className="sidebar-text">{label}</span>
  </div>
);

export default Sidebar;
