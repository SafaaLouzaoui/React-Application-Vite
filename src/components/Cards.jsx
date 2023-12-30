// src/components/DashboardSummary.jsx
import React from 'react';
import '../styles/Cards.css';

const Cards = () => {
  return (
    <div className="frame1">
      <div className="dashboard-summary">
        <div className="summary-container">
          <div className="summary-heading">
            <div className="icon">
              <img className="img" src="src/assets/Graph.png" alt="Graph" />
            </div>
            <div className="filter">
              <div className="text-wrapper">This Week</div>
              <img className="fi-chevron-down" src="src/assets/fi_chevron-down.png" alt="Chevron Down" />
            </div>
          </div>
          <div className="div">
            <div className="div-2">
              <div className="text-wrapper-2">Sales</div>
              <div className="div-3">
                <div className="text-wrapper-3">₦0.00</div>
                <div className="text-wrapper-4">+0.00%</div>
              </div>
            </div>
            <div className="div-2">
              <div className="text-wrapper-2">Volume</div>
              <div className="div-3">
                <div className="text-wrapper-3">0</div>
                <div className="text-wrapper-5">+0.00%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Repeated structure for other cards */}
      
      <div className="dashboard-summary">
        <div className="summary-container">
          <div className="summary-heading">
            <div className="img-wrapper">
              <img className="img" src="src/assets/Users.png" alt="User" />
            </div>
            <div className="filter">
              <div className="text-wrapper">This Week</div>
              <img className="fi-chevron-down" src="src/assets/fi_chevron-down.png" alt="Chevron Down" />
            </div>
          </div>
          <div className="div">
            <div className="div-2">
              <div className="text-wrapper-2">Customers</div>
              <div className="div-3">
                <div className="text-wrapper-3">0</div>
                <div className="text-wrapper-4">+0.00%</div>
              </div>
            </div>
            <div className="div-2">
              <div className="text-wrapper-2">Active</div>
              <div className="div-3">
                <div className="text-wrapper-3">0</div>
                <div className="text-wrapper-4">+0.00%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="summary-container-wrapper3">
        <div className="summary-container">
          <div className="summary-heading">
            <div className="img-wrapper">
              <img className="img" src="src/assets/Bag.png" alt="Bag" />
            </div>
            <div className="filter">
              <div className="text-wrapper">This Week</div>
              <img className="fi-chevron-down" src="src/assets/fi_chevron-down.png" alt="Chevron Down" />
            </div>
          </div>
          <div className="div">
            <div className="div-2">
              <div className="text-wrapper-2">All Orders</div>
              <div className="div-3">
                <div className="text-wrapper-3">0</div>
                <div className="text-wrapper-5">+0.00%</div>
              </div>
            </div>
            <div className="div-2">
              <div className="text-wrapper-2">Pending</div>
              <div className="div-3">
                <div className="text-wrapper-3">0</div>
                <div className="text-wrapper-5">+0.00%</div>
              </div>
            </div>
            <div className="div-2">
              <div className="text-wrapper-2">Completed</div>
              <div className="div-3">
                <div className="text-wrapper-3">0</div>
                <div className="text-wrapper-4">+0.00%</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
  );
};

export default Cards;
