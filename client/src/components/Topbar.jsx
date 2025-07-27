import React from "react";
import { FaSearch } from "react-icons/fa";

const Topbar = () => {
  return (
    <header className="h-16 bg-red-600 flex items-center justify-between px-6 shadow-md relative">
      
      {/* ✅ Center Section - White Pill for CAMO SOFTWARE */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-full px-8 py-2 shadow-md">
          <span className="text-sm font-semibold text-black tracking-wide">
            CAMO SOFTWARE
          </span>
        </div>
      </div>

      {/* ✅ Right Section - Search Input */}
      <div className="ml-auto relative">
        {/* Search Icon inside input */}
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />

        <input
          type="text"
          placeholder="Flight number"
          className="pl-9 pr-4 py-2 rounded-md text-black w-64 focus:outline-none"
        />
      </div>
    </header>
  );
};

export default Topbar;
