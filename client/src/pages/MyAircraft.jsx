import React from "react";

const MyAircraft = () => {
  return (
    <div className="pt-6 pl-6 pr-6 mt-[4rem]">
      {/* Top section with Search & Add */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
        {/* Search bar and filter */}
        <div className="flex items-center gap-2">
          {/* Filter Button */}
          <button className="h-10 w-10 flex items-center justify-center border border-gray-300 rounded-md bg-white shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2l-6 6v5l-4 2v-7L3 6V4z"
              />
            </svg>
          </button>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="h-10 w-[300px] pl-10 pr-4 rounded-full border border-gray-300 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Add Aircraft Button */}
        <button className="h-10 px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition">
          + Add Aircraft
        </button>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full text-sm text-left text-gray-800 border-separate border-spacing-0">
          <thead className="bg-[#FF4B2B] text-white">
            <tr>
              <th className="px-3 py-3">
                <input type="checkbox" />
              </th>
              <th className="px-3 py-3 font-semibold">Tail Number</th>
              <th className="px-3 py-3 font-semibold">MSN Number</th>
              <th className="px-3 py-3 font-semibold">Model</th>
              <th className="px-3 py-3 font-semibold">Maintenance Program / Revision</th>
              <th className="px-3 py-3 font-semibold">Base</th>
              <th className="px-3 py-3 font-semibold">Flight Hours</th>
              <th className="px-3 py-3 font-semibold">Flight Cycles</th>
              <th className="px-3 py-3 font-semibold">APU Hours</th>
              <th className="px-3 py-3 font-semibold">APU Cycles</th>
              <th className="px-3 py-3 font-semibold">Status</th>
              <th className="px-3 py-3 font-semibold">System Serviceability</th>
              <th className="px-3 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[...Array(10)].map((_, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-3 py-3 text-center">
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
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {/* Edit Icon */}
                    <button
                      className="icon-button text-gray-600 hover:text-blue-600"
                      title="Edit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z"
                        />
                      </svg>
                    </button>

                    {/* Delete Icon */}
                    <button
                      className="icon-button text-gray-600 hover:text-red-600"
                      title="Delete"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
        <span>1–10 of 97</span>
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select className="border px-2 py-1 rounded text-sm">
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
  );
};

export default MyAircraft;
