import React from 'react';

// The headers are defined once
const tableHeaders = [
  'Position', 'Part Number', 'Serial Number', 'TSN', 'CSN', 'TSR', 'CSR'
];

// This component receives an array of engine data as a prop
const EngineInfoTable = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Engine Information</h3>
      <div className="rounded-lg border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              {tableHeaders.map((header) => (
                <th key={header} className="px-4 py-3 text-left font-medium text-gray-600">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* The table body is now dynamically rendered from the data array */}
            {data.map((engine) => (
              <tr key={engine.serialNumber} className="hover:bg-gray-50">
                <td className="px-4 py-3">{engine.position}</td>
                <td className="px-4 py-3">{engine.partNumber}</td>
                <td className="px-4 py-3">{engine.serialNumber}</td>
                <td className="px-4 py-3">{engine.tsn}</td>
                <td className="px-4 py-3">{engine.csn}</td>
                <td className="px-4 py-3">{engine.tsr}</td>
                <td className="px-4 py-3">{engine.csr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EngineInfoTable;