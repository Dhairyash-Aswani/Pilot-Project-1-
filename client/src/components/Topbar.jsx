import React from "react";
import { FaSearch } from "react-icons/fa";

const Topbar = () => {
  return (
    <header className="bg-[#FF4B2B] h-16 flex items-center justify-between px-4 shadow z-30 w-full">
      
      {/* Left space to align center box properly */}
      <div className="w-64" />

      {/* Centered "CAMO SOFTWARE" pill */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-full px-8 py-1 shadow text-black font-semibold text-sm">
          CAMO SOFTWARE
        </div>
      </div>

      {/* Search input on the right */}
      <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Flight number"
          className="pl-10 pr-4 py-1.5 rounded bg-white text-sm w-64 focus:outline-none"
        />
      </div>
    </header>
  );
};

export default Topbar;
