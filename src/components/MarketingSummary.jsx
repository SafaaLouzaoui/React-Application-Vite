// src/components/MarketingSummary.jsx
import React from 'react';
import '../styles/MarketingSummary.css';

const MarketingSummary = () => {
  return (
    <div className="top">
      <div className="bar-chart">
        <div className="content">
          <div className="div">
            <div className="div-2">
              <div className="text-wrapper">Marketing</div>
              <div className="filter">
                <div className="text-wrapper-2">This Week</div>
                <img className="fi-chevron-down" src="src/assets/fi_chevron-down.png" alt="Chevron Down" />
              </div>
            </div>
            <div className="div-2">
              <div className="key">
                <div className="rectangle"></div>
                <div className="text-wrapper-3">Acquisition</div>
              </div>
              <div className="key">
                <div className="rectangle-2"></div>
                <div className="text-wrapper-3">Purchase</div>
              </div>
              <div className="key">
                <div className="rectangle-3"></div>
                <div className="text-wrapper-3">Retention</div>
              </div>
            </div>
          </div>
          <div className="group"></div>
        </div>
      </div>
      <div className="right">
        <div className="dashboard-summary">
          <div className="summary-container">
            <div className="summary-heading">
              <div className="icon"><img className="img" src="src/assets/Folder.png" alt="Folder" /></div>
              <div className="filter-2">
                <div className="text-wrapper-4">This Week</div>
                <img className="fi-chevron-down-2" src="src/assets/fi_chevron-down.png" alt="Chevron Down" />
              </div>
            </div>
            <div className="frame">
              <div className="frame-2">
                <div className="text-wrapper-5">All Products</div>
                <div className="frame-3">
                  <div className="text-wrapper-6">0</div>
                  <div className="text-wrapper-7">+0.00%</div>
                </div>
              </div>
              <div className="frame-2">
                <div className="text-wrapper-5">Active</div>
                <div className="frame-3">
                  <div className="text-wrapper-6">0</div>
                  <div className="text-wrapper-7">+0.00%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="summary-container-wrapper">
          <div className="summary-container">
            <div className="summary-heading">
              <div className="fi-shopping-cart-wrapper"><img className="img" src="src/assets/shopping.png" alt="Shopping Cart" /></div>
              <div className="filter">
                <div className="text-wrapper-2">This Week</div>
                <img className="fi-chevron-down" src="src/assets/fi_chevron-down.png" alt="Chevron Down" />
              </div>
            </div>
            <div className="frame">
              <div className="frame-2">
                <div className="customers">Abandoned Cart</div>
                <div className="frame-3">
                  <div className="text-wrapper-8">0%</div>
                  <div className="text-wrapper-9">+0.00%</div>
                </div>
              </div>
              <div className="frame-2">
                <div className="active">Customers</div>
                <div className="frame-3">
                  <div className="text-wrapper-8">0</div>
                  <div className="text-wrapper-10">+0.00%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingSummary;
