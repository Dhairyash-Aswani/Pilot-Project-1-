// client/src/pages/MyAircraft.jsx
import React from "react";

const MyAircraft = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Data Table</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          + Add Aircraft
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-white uppercase bg-[#FF4B2B]">
            <tr>
              <th className="px-3 py-3">
                <input type="checkbox" />
              </th>
              <th className="px-3 py-3">Tail Number</th>
              <th className="px-3 py-3">MSN Number</th>
              <th className="px-3 py-3">Model</th>
              <th className="px-3 py-3">Maintenance Program / Revision</th>
              <th className="px-3 py-3">Base</th>
              <th className="px-3 py-3">Flight Hours</th>
              <th className="px-3 py-3">Flight Cycles</th>
              <th className="px-3 py-3">APU Hours</th>
              <th className="px-3 py-3">APU Cycles</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-3 py-3">System Serviceability</th>
              <th className="px-3 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, i) => (
              <tr key={i} className="border-b hover:bg-gray-100">
                <td className="px-3 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-3 py-3">AC-PLZ</td>
                <td className="px-3 py-3">2654</td>
                <td className="px-3 py-3">A320-214</td>
                <td className="px-3 py-3">A320-214 | S5I, 12</td>
                <td className="px-3 py-3">Base X</td>
                <td className="px-3 py-3">52787:28</td>
                <td className="px-3 py-3">32623</td>
                <td className="px-3 py-3">23517:00</td>
                <td className="px-3 py-3">24588</td>
                <td className="px-3 py-3 text-green-600">Serviceable</td>
                <td className="px-3 py-3 text-red-600">Unserviceable</td>
                <td className="px-3 py-3 space-x-2">
                  <button className="text-blue-600 hover:underline">✏️</button>
                  <button className="text-red-600 hover:underline">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 border-t">
          <span>1–10 of 97</span>
          <div className="flex items-center gap-2">
            <span>Rows per page: </span>
            <select className="border rounded px-2 py-1 text-sm">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            <span className="ml-4">1/10</span>
            <button className="px-2">◀️</button>
            <button className="px-2">▶️</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAircraft;
