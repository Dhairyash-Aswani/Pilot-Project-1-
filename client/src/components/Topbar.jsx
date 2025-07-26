import React from 'react';

const Topbar = () => {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-[#FF4B2B] text-white flex items-center px-6 z-30 shadow">
      <div className="flex justify-between w-full">
        <span className="text-lg font-semibold">CAMO SOFTWARE</span>
        <input
          type="text"
          placeholder="Flight number"
          className="rounded px-4 py-1 text-black"
        />
      </div>
    </header>
  );
};

export default Topbar;
