import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// Import the new reusable components
import AircraftInfoCard from '../components/AircraftInfoCard';
import EngineInfoTable from '../components/EngineInfoTable';

// Data is now separated from the component logic
const aircraftData = {
  'Tail Number': 'AC-PLZ',
  'Induction Date': '10/28/23',
  'MSN Number': '2654',
  'Aircraft Hours': '52787',
  'Model': 'A320-214',
  'Aircraft Cycles': '32623',
  'Manufacture Date': '1/1/06',
};

const engineData = [
  { 
    position: 'Engine RH', 
    partNumber: 'CFM56-5B4/P', 
    serialNumber: '5774860', 
    tsn: '4579256', 
    csn: '28100', 
    tsr: '0.0', 
    csr: '0' 
  },
  // Add another engine here and the table will update automatically
  // { position: 'Engine LH', partNumber: '...', serialNumber: '...', ... },
];

const AircraftDetails = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('General Info');

  const tabs = [
    'General Info', 'Aircraft Detail', 'Operational Details',
    'Maintenance History', 'Weight And Balance', 'Cabin Configuration',
  ];

  return (
    <div className="aircraft-details-page detail-container">
      {/* Header Bar remains the same */}
      <div className="aircraft-header-bar">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-700 hover:text-red-500"
        >
          <FaArrowLeft size={18} />
        </button>
        <h2 className="text-lg font-semibold">Aircraft AC-PLZ</h2>
      </div>

      {/* Tabs - Now cleaner without the extra card background */}
      <div className="flex gap-6 px-1 border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab
                ? 'text-red-600 border-red-600'
                : 'text-gray-600 border-transparent hover:text-red-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conditional Content based on active tab */}
      <div>
        {activeTab === 'General Info' && (
          <div className="space-y-6">
            <AircraftInfoCard data={aircraftData} />
            <EngineInfoTable data={engineData} />
          </div>
        )}
        {/* You can add content for other tabs here */}
        {activeTab === 'Aircraft Detail' && (
          <div className="bg-white rounded-xl shadow-md p-6">More details coming soon...</div>
        )}
      </div>
    </div>
  );
};

export default AircraftDetails;