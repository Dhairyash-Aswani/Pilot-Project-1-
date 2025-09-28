import React from 'react';
import aircraftImg from '../assets/aircraft.png';

const AircraftInfoCard = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row gap-8">
      {/* LEFT: Image Section */}
      <div className="flex flex-col items-start md:w-1/3">
        <img
          src={aircraftImg}
          alt="Aircraft"
          className="aircraft-image rounded-md border border-gray-200"
        />
        <a href="#" className="mt-4 text-sm font-semibold text-red-600 hover:text-red-700">
          Update Image
        </a>
      </div>

      {/* RIGHT: Info Section - Using Tailwind's grid */}
      <div className="flex-1 grid grid-cols-2 gap-y-5 gap-x-8 text-sm">
        {Object.entries(data).map(([label, value]) => (
          <div key={label}>
            <p className="text-gray-500 m-0">{label}</p>
            <p className="font-medium text-gray-800 m-0 mt-1">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AircraftInfoCard;