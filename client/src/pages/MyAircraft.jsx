import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/style.css";

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

  const firstHalf = moduleButtons.slice(0, 6);
  const secondHalf = moduleButtons.slice(6);

  return (
    <div className="aircraft-container">
      <div className="aircraft-table-wrapper compact">
        <table className="aircraft-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
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
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {[...Array(5)].map((_, i) => ( // reduced rows for less scroll
              <React.Fragment key={i}>
                <tr className="aircraft-row">
                  <td><input type="checkbox" /></td>
                  <td>AC-PLZ</td>
                  <td>2654</td>
                  <td>A320-214</td>
                  <td>A320-214 | S5I, 12</td>
                  <td>Base X</td>
                  <td>52787:28</td>
                  <td>32623</td>
                  <td>23517:00</td>
                  <td>24588</td>
                  <td className="status-green">Serviceable</td>
                  <td className="status-red">Unserviceable</td>
                  <td>
                    <div className="action-buttons">
                      <button onClick={() => toggleRow(i)} className="expand-btn">
                        {expandedRow === i ? "▲" : "▼"}
                      </button>
                      <button className="edit-btn">✏️</button>
                      <button className="delete-btn">🗑️</button>
                    </div>
                  </td>
                </tr>

                {expandedRow === i && (
                  <tr>
                    <td colSpan={13} className="expanded-cell">
                      <div className="module-section">
                        <div className="module-grid">
                          {firstHalf.map((btn, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleModuleClick(btn.route)}
                              className="module-btn"
                            >
                              <span>{btn.icon}</span> {btn.label}
                            </button>
                          ))}
                        </div>
                        <div className="module-grid">
                          {secondHalf.map((btn, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleModuleClick(btn.route)}
                              className="module-btn"
                            >
                              <span>{btn.icon}</span> {btn.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <span>1–5 of 97</span>
        <div className="pagination-controls">
          <span>Rows per page:</span>
          <select>
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
          <span>1/20</span>
          <button>◀️</button>
          <button>▶️</button>
        </div>
      </div>
    </div>
  );
};

export default MyAircraft;
