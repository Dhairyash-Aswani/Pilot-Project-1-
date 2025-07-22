import Sidebar from './Sidebar';   // adjust the path if needed
import Topbar from './Topbar';     // adjust the path if needed

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar - fixed on left */}
      <Sidebar />

      {/* Right section - Topbar and Page Content */}
      <div className="flex flex-col flex-1 bg-gray-100 min-h-screen ml-64">
        <Topbar />

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
