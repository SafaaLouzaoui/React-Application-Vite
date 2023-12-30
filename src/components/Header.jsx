// src/components/Header.jsx
import React from 'react';
import '../styles/Header.css'
const Header = () => {
  return (
    <div className="top-nav">
      <div className="nav-container">
        <div className="text-wrapper">Dashboard</div>
        <div className="profile">
          <div className="buttom">
            <div className="button">
              <img className="vuesax-bold" src="src/assets/notification.png" alt="Notification" />
            </div>
            <div className="badge">
              <div className="BADGE">1</div>
            </div>
          </div>
          <div className="frame">
            <div className="group">
              <div className="div">
                <div className="text-wrapper-2">Anima Agrawal</div>
                <div className="text-wrapper-3">Company LLC</div>
              </div>
            </div>
            <div className="avatar-image">
              <img className="WING" src="src/assets/WING-1.png" alt="WING" />
              <div className="base"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumbs">
        <div className="div">
          <img className="iconly-bulk-home" src="src/assets/Home.png" alt="Home" />
          <div className="div">
            <div className="text-wrapper">/</div>
            <div className="text-wrapper-2">Page</div>
          </div>
          <div className="div">
            <div className="text-wrapper">/</div>
            <div className="text-wrapper-2">Page</div>
          </div>
          <div className="div">
            <div className="text-wrapper">/</div>
            <div className="text-wrapper-2">Page</div>
          </div>
          <div className="div">
            <div className="text-wrapper">/</div>
            <div className="text-wrapper-2">Page</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
