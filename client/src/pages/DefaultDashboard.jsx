import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Using a variety of icons for a professional look
import { FiBook, FiTool, FiClipboard, FiShield, FiFileText, FiArrowRight } from 'react-icons/fi';

// Organized data structure for the tabs
const resourcesData = {
  technical: {
    title: "Technical Documents",
    icon: <FiBook />,
    items: [
      { name: "Aircraft Maintenance Manual (AMM)", description: "Core maintenance procedures for aircraft." },
      { name: "Illustrated Parts Catalog (IPC)", description: "Find and identify aircraft parts." },
      { name: "Structural Repair Manual (SRM)", description: "Guidelines for repairing aircraft structures." },
      { name: "Component Maintenance Manual (CMM)", description: "Procedures for off-aircraft components." },
    ]
  },
  tools: {
    title: "Tools & Equipment",
    icon: <FiTool />,
    items: [
      { name: "Calibrated Tools Inventory", description: "View all tools requiring calibration." },
      { name: "Tool ID Search", description: "Find a specific tool by its identification number." },
      { name: "Calibration Due Date Report", description: "List of tools nearing their calibration due date." },
    ]
  },
  maintenance: {
    title: "Maintenance Data",
    icon: <FiClipboard />,
    items: [
      { name: "Work Cards Library", description: "Standardized task cards for maintenance." },
      { name: "Inspection Checklists", description: "Checklists for routine and special inspections." },
      { name: "Maintenance Schedules", description: "Long-term maintenance planning documents." },
    ]
  },
  compliance: {
    title: "Compliance & Regulatory",
    icon: <FiShield />,
    items: [
      { name: "Airworthiness Directives (ADs)", description: "Mandatory directives from aviation authorities." },
      { name: "Service Bulletins (SBs)", description: "Notices from manufacturers about product improvements." },
      { name: "Regulatory Body Links", description: "Quick links to DGCA, FAA, and EASA websites." },
    ]
  },
  internal: {
    title: "Training & Internal Docs",
    icon: <FiFileText />,
    items: [
      { name: "Standard Operating Procedures (SOPs)", description: "Internal guidelines for company processes." },
      { name: "Quality Assurance (QA) Manuals", description: "Documents defining quality standards." },
      { name: "Safety & Emergency Guidelines", description: "Protocols for safety and emergency situations." },
    ]
  }
};

const MyResources = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const navigate = useNavigate();

  const activeTabData = resourcesData[activeTab];

  return (
    <div className="p-6 md:p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Resource Center</h1>
        <p className="text-gray-500 mt-1">Central hub for all technical documentation and maintenance data.</p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex space-x-6">
          {Object.keys(resourcesData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`
                flex items-center gap-2 pb-3 border-b-2
                transition-colors duration-200
                ${activeTab === key
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {resourcesData[key].icon}
              <span className="text-sm">{resourcesData[key].title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200">
        {activeTabData.items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-200 last:border-b-0"
          >
            <div>
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <button 
              onClick={() => alert(`Accessing: ${item.name}`)}
              className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Access
              <FiArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyResources;