// src/components/RecentOrders.jsx
import React from 'react';
import '../styles/RecentOrders.css';

const RecentOrders = () => {
  return (
    <div className="order-summary">
      <div className="frame">
        <div className="text-wrapper">Recent Orders</div>
        <div className="empty-state">
          <div className="icon-container">
            <img className="iconly-bulk-bag" src="src/assets/Bag.png" alt="Bag Icon" />
          </div>
          <div className="empty-state-content">
            <div className="description">
              <div className="div">No Orders Yet?</div>
              <p className="p">Add products to your store and start selling to see orders here.</p>
            </div>
            <div className="buttons">
              <div className="label-container">
                <img className="iconly-light-heart" src="src/assets/Heart.png" alt="Heart Icon" />
                <div className="label">New Product</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
