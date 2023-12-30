// src/components/SalesSummary.jsx
import React from 'react';
import '../styles/SalesSummary.css';

const SalesSummary = () => {
  return (
    <div className="bottom">
      <div className="chart">
        <div className="summary-heading">
          <div className="frame">
            <div className="text-wrapper">Summary</div>
            <div className="icon">
              <div className="div">
                <div className="text-wrapper-2">Sales</div>
                <img className="fi-chevron-down" src="src/assets/fi_chevron-down2.png" alt="Chevron Down" />
              </div>
            </div>
          </div>
          <div className="filter">
            <div className="text-wrapper-3">Last 7 Days</div>
            <img className="img" src="src/assets/fi_chevron-down.png" alt="Chevron Down" />
          </div>
        </div>
        <div className="graph-bar">
          <div className="x-axis">
            <div className="text-wrapper-4">100k</div>
            <div className="text-wrapper-5">80k</div>
            <div className="text-wrapper-5">60k</div>
            <div className="text-wrapper-5">40k</div>
            <div className="text-wrapper-5">20k</div>
          </div>
          <div className="bar">
            <div className="bar-2"></div>
            <div className="text-wrapper-6">Sept 10</div>
          </div>
          <div className="bar">
            <div className="bar-2"></div>
            <div className="text-wrapper-6">Sept 11</div>
          </div>
          <div className="bar">
            <div className="bar-2"></div>
            <div className="text-wrapper-6">Sept 12</div>
          </div>
          <div className="bar">
            <div className="bar-2"></div>
            <div className="text-wrapper-6">Sept 13</div>
          </div>
          <div className="bar">
            <div className="bar-2"></div>
            <div className="text-wrapper-6">Sept 14</div>
          </div>
          <div className="bar">
            <div className="bar-2"></div>
            <div className="text-wrapper-6">Sept 15</div>
          </div>
          <div className="bar">
            <div className="bar-2"></div>
            <div className="text-wrapper-6">Sept 16</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSummary;
