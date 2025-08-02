import React from "react";
import loadingLogoImg from "../assets/loadinglogo.png"; // ✅ Image path

const LoadingLogo = ({ size = 80, visible = true }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-[6px] z-50 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={loadingLogoImg}
        alt="Loading..."
        style={{ width: size, height: size }}
        className="animate-spin-slow animate-pulse-scale"
      />
    </div>
  );
};

export default LoadingLogo;
