import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../assets/style.css";
import aircraftImg from "../assets/aircraft.png";

const AircraftDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
    <div className="aircraft-details-page detail-container">
      {/* ✅ Header Bar with Gray Background */}
      <div className="aircraft-header-bar">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-700 hover:text-red-500"
        >
          <FaArrowLeft size={18} />
        </button>
        <h2 className="text-lg font-semibold">Aircraft AC-PLZ</h2>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-md shadow-sm mb-4">
        <div className="flex gap-6 px-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? "text-red-600 border-red-600"
                  : "text-gray-600 border-transparent hover:text-red-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN: image left + info right */}
      <div className="flex flex-col md:flex-row gap-6 my-6 items-start">
        {/* LEFT: Image */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start md:w-1/3">
          <img
            src={aircraftImg}
            alt="Aircraft"
            className="aircraft-image rounded-md self-start"
          />
          <button className="secondary-btn mt-3 self-start">
            Update Image
          </button>
        </div>

        {/* RIGHT: Info */}
        <div className="bg-white shadow-md rounded-xl p-6 flex-1 md:ml-8">
          <div className="grid grid-cols-2 gap-y-6 gap-x-12 text-sm">
            <p>
              <span className="text-gray-500">Tail Number:</span>{" "}
              <span className="font-medium text-gray-900">AC-PLZ</span>
            </p>
            <p>
              <span className="text-gray-500">Induction Date:</span>{" "}
              <span className="font-medium text-gray-900">10/28/23</span>
            </p>
            <p>
              <span className="text-gray-500">MSN Number:</span>{" "}
              <span className="font-medium text-gray-900">2654</span>
            </p>
            <p>
              <span className="text-gray-500">Aircraft Hours:</span>{" "}
              <span className="font-medium text-gray-900">52787</span>
            </p>
            <p>
              <span className="text-gray-500">Model:</span>{" "}
              <span className="font-medium text-gray-900">A320-214</span>
            </p>
            <p>
              <span className="text-gray-500">Aircraft Cycles:</span>{" "}
              <span className="font-medium text-gray-900">32623</span>
            </p>
            <p className="col-span-2">
              <span className="text-gray-500">Manufacture Date:</span>{" "}
              <span className="font-medium text-gray-900">1/1/06</span>
            </p>
          </div>
        </div>
      </div>

      {/* Engine Information */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h3 className="font-medium mb-4">Engine Information</h3>
        <div className="rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Position",
                  "Part Number",
                  "Serial Number",
                  "TSN",
                  "CSN",
                  "TSR",
                  "CSR",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-3 py-2 text-left font-medium text-gray-700"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2">Engine RH</td>
                <td className="px-3 py-2">CFM56-5B4/P</td>
                <td className="px-3 py-2">5774860</td>
                <td className="px-3 py-2">4579256</td>
                <td className="px-3 py-2">28100</td>
                <td className="px-3 py-2">0.0</td>
                <td className="px-3 py-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AircraftDetails;
