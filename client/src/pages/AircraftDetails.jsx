import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AircraftDetail = () => {
  const { id } = useParams(); // You can fetch specific aircraft data here
  const [activeTab, setActiveTab] = useState("General Info");

  const tabs = [
    "General Info",
    "Aircraft Detail",
    "Operational Details",
    "Maintenance History",
    "Weight And Balance",
    "Cabin Configuration",
  ];

  return (
    <div className="p-6 mt-[4rem]">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-300 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium whitespace-nowrap ${
              activeTab === tab
                ? "border-b-2 border-red-500 text-red-500"
                : "text-gray-600 hover:text-red-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Image Section */}
        <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
          <img
            src="../assets/aircraft.png"
            alt="Aircraft"
            className="rounded-lg w-full object-cover"
          />
          <button className="mt-3 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm">
            Upload Image
          </button>
        </div>

        {/* Info Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="grid grid-cols-2 gap-y-3 text-sm">
            <p>
              <span className="font-medium">Tail Number:</span> AC-PLZ
            </p>
            <p>
              <span className="font-medium">Induction Date:</span> 12/02/23
            </p>
            <p>
              <span className="font-medium">MSN Number:</span> 2654
            </p>
            <p>
              <span className="font-medium">Aircraft Hours:</span> 52629
            </p>
            <p>
              <span className="font-medium">Model:</span> A320-214
            </p>
            <p>
              <span className="font-medium">Aircraft Cycles:</span> 34823
            </p>
            <p>
              <span className="font-medium">Manufacture Date:</span> 01/05/05
            </p>
          </div>
        </div>
      </div>

      {/* Engine Information */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="font-medium mb-3">Engine Information</h3>
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              {[
                "Position",
                "Part Number",
                "Serial Number",
                "TSN",
                "CSN",
                "TSO",
                "CSO",
              ].map((header) => (
                <th
                  key={header}
                  className="px-3 py-2 text-left font-normal text-gray-700"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="px-3 py-2">Engine 1</td>
              <td className="px-3 py-2">CFM56-5B4/P</td>
              <td className="px-3 py-2">123456</td>
              <td className="px-3 py-2">28300</td>
              <td className="px-3 py-2">2160</td>
              <td className="px-3 py-2">800</td>
              <td className="px-3 py-2">50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AircraftDetail;
