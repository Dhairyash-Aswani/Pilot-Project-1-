import React from "react";
import loadingLogo from "../assets/loadinglogo.png"; // ✅ Your new loading logo

const LoadingLogo = ({ size = 80 }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-[2px] z-50">
      <img
        src={loadingLogo}
        alt="Loading..."
        style={{ width: size, height: size }}
        className="animate-spin-slow animate-pulse-scale"
      />
    </div>
  );
};

export default LoadingLogo;
