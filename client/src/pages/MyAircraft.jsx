import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyAircraft = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const navigate = useNavigate();

  const toggleRow = (rowIndex) => {
    setExpandedRow(expandedRow === rowIndex ? null : rowIndex);
  };

  const handleModuleClick = (route) => {
    if (route) navigate(route);
  };

  const moduleButtons = [
    { label: "Attachments", icon: "📎" },
    { label: "A/C Detail", icon: "🛩️", route: "/aircraft-details" },
    { label: "Configuration", icon: "⚙️" },
    { label: "Maintenance Tasks", icon: "⏱️" },
    { label: "Aircraft Defects", icon: "⚠️" },
    { label: "TechLog Configuration", icon: "📝" },
    { label: "TechLog", icon: "🛠️" },
    { label: "Aircraft Flights", icon: "✈️" },
    { label: "Daily Utilization", icon: "📊" },
    { label: "Check Work Pack", icon: "📋" },
    { label: "Aircraft Account", icon: "💳" },
    { label: "Oil Uplifts Setup", icon: "🛢️" },
  ];

  return (
    <div className="pt-6 pl-6 pr-6 mt-[4rem]">
      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full text-sm text-center text-gray-800 border-separate border-spacing-0">
          <thead className="bg-[#FF4B2B] text-white">
            <tr>
              <th className="px-3 py-3">
                <input type="checkbox" />
              </th>
              {[
                "Tail Number",
                "MSN Number",
                "Model",
                "Maintenance Program / Revision",
                "Base",
                "Flight Hours",
                "Flight Cycles",
                "APU Hours",
                "APU Cycles",
                "Status",
                "System Serviceability",
                "Actions",
              ].map((h) => (
                <th
                  key={h}
                  className="px-3 py-3 font-normal uppercase text-xs text-center"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {[...Array(10)].map((_, i) => (
              <React.Fragment key={i}>
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-3">
                    <input type="checkbox" />
                  </td>
                  <td>AC-PLZ</td>
                  <td>2654</td>
                  <td>A320-214</td>
                  <td>A320-214 | S5I, 12</td>
                  <td>Base X</td>
                  <td>52787:28</td>
                  <td>32623</td>
                  <td>23517:00</td>
                  <td>24588</td>
                  <td className="uppercase text-green-600 font-semibold">
                    Serviceable
                  </td>
                  <td className="uppercase text-red-600 font-semibold">
                    Unserviceable
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3 justify-end">
                      {/* Expand/Collapse Button */}
                      <button
                        title="Expand"
                        onClick={() => toggleRow(i)}
                        className="text-gray-600 hover:text-black"
                      >
                        {expandedRow === i ? "▲" : "▼"}
                      </button>

                      {/* Edit */}
                      <button className="text-gray-600 hover:text-blue-600">
                        ✏️
                      </button>

                      {/* Delete */}
                      <button className="text-gray-600 hover:text-red-600">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Expanded Row */}
                {expandedRow === i && (
                  <tr>
                    <td colSpan={13} className="bg-gray-50 p-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {moduleButtons.map((btn, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleModuleClick(btn.route)}
                            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-3 rounded-md text-sm w-full justify-start"
                          >
                            <span>{btn.icon}</span> {btn.label}
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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
