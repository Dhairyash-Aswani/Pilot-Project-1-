import React from 'react';
import {
  FaThLarge, FaUserShield, FaPlane, FaBoxOpen,
  FaUsers, FaMoneyBillAlt, FaChartBar, FaComments
} from 'react-icons/fa';

const cardData = [
  { label: 'Default Dashboard', icon: <FaThLarge /> },
  { label: 'Administration', icon: <FaUserShield /> },
  { label: 'My Aircraft', icon: <FaPlane /> },
  { label: 'My Materials', icon: <FaBoxOpen /> },
  { label: 'My Resources', icon: <FaUsers /> },
  { label: 'My Financials', icon: <FaMoneyBillAlt /> },
  { label: 'Analytics', icon: <FaChartBar /> },
  { label: 'Chat', icon: <FaComments /> },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
        >
          <div className="text-3xl mb-2">{card.icon}</div>
          <h3 className="text-lg font-medium">{card.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
