import React from 'react';

const Topbar = () => {
  return (
    <header className="bg-red-600 text-white py-4 px-6 flex items-center justify-between">
      <div className="text-xl font-bold tracking-wide">CAMO SOFTWARE</div>
      <input
        type="text"
        placeholder="Flight number"
        className="rounded-full px-4 py-1 text-black w-64 outline-none"
      />
    </header>
  );
};

export default Topbar;
