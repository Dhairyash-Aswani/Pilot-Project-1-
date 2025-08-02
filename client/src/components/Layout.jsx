import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] grid-rows-[4rem_1fr] h-screen">
      
      {/* Sidebar (first column, spans both rows) */}
      <div className="row-span-2 col-span-1 bg-white shadow-md z-20">
        <Sidebar />
      </div>

      {/* Topbar (top row, second column) */}
      <div className="col-span-1 row-span-1 z-10">
        <Topbar />
      </div>

      {/* Main Content (bottom row, second column) */}
      <main className="bg-gray-100 p-6 overflow-y-auto col-span-1 row-span-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;
