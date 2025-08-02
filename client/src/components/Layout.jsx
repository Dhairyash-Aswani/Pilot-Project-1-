import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ marginLeft: "13rem", flex: 1, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {/* Topbar */}
        <div style={{ flexShrink: 0 }}>
          <Topbar />
        </div>

        {/* Scrollable Content */}
        <main style={{ flex: 1, overflowY: "auto", backgroundColor: "#f6f5f7", padding: "1.5rem" }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
