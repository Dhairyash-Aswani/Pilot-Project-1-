import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] grid-rows-[4rem_1fr] h-screen">
      {/* Sidebar */}
      <div className="row-span-2 bg-[#FF4B2B] text-white">
        <Sidebar />
      </div>

      {/* Topbar */}
      <div className="col-span-1 bg-[#FF4B2B] text-white">
        <Topbar />
      </div>

      {/* Main Content */}
      <main className="bg-gray-100 p-6 overflow-y-auto">{children}</main>
    </div>
  );
};

export default Layout;
