// client/src/pages/MyAircraft.jsx
import React from "react";

const MyAircraft = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Table</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-white uppercase bg-[#FF4B2B]">
            <tr>
              <th className="px-4 py-3">Tail Number</th>
              <th className="px-4 py-3">MSN Number</th>
              <th className="px-4 py-3">Model</th>
              <th className="px-4 py-3">Maintenance Program / Revision</th>
              <th className="px-4 py-3">Base</th>
              <th className="px-4 py-3">Flight Hours</th>
              <th className="px-4 py-3">Flight Cycles</th>
              <th className="px-4 py-3">APU Hours</th>
              <th className="px-4 py-3">APU Cycles</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">System Serviceability</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, i) => (
              <tr key={i} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">AC-PLZ</td>
                <td className="px-4 py-2">2654</td>
                <td className="px-4 py-2">A320-214</td>
                <td className="px-4 py-2">A320-214 | S5I, 12</td>
                <td className="px-4 py-2">Base X</td>
                <td className="px-4 py-2">52787:28</td>
                <td className="px-4 py-2">32623</td>
                <td className="px-4 py-2">23517:00</td>
                <td className="px-4 py-2">24588</td>
                <td className="px-4 py-2 text-green-600">Serviceable</td>
                <td className="px-4 py-2 text-red-600">Unserviceable</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-blue-600 hover:underline">✏️</button>
                  <button className="text-red-600 hover:underline">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAircraft;
