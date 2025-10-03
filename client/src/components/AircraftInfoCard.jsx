import React from "react";
import aircraftImg from "../assets/aircraft.png";

const AircraftInfoCard = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row items-start gap-8">
      {/* LEFT: Image */}
      <div className="flex-shrink-0 md:w-1/3 flex flex-col items-start">
        <img
          src={aircraftImg}
          alt="Aircraft"
          className="rounded-md border border-gray-200 max-w-[260px] max-h-[180px] object-contain"
        />
        <a
          href="#"
          className="mt-3 text-sm font-semibold text-red-600 hover:text-red-700"
        >
          Update Image
        </a>
      </div>

      {/* RIGHT: Info */}
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-y-6 gap-x-12 text-sm">
          {Object.entries(data).map(([label, value]) => (
            <div key={label}>
              <p className="text-gray-500">{label}</p>
              <p className="font-medium text-gray-800 mt-1">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AircraftInfoCard;