import React from 'react';

const Topbar = () => {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-[#FF4B2B] text-white z-30 shadow flex items-center justify-center">
      <div className="flex items-center gap-6">
        <span className="text-xl font-semibold">CAMO SOFTWARE</span>
        <input
          type="text"
          placeholder="Flight number"
          className="rounded px-4 py-1 text-black w-64"
        />
      </div>
    </header>
  );
};

export default Topbar;
