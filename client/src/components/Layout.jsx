import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <Topbar />
      <div className="pt-16 pl-64 bg-gray-100 min-h-screen p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
