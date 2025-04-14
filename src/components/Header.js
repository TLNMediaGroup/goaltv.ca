// src/components/Header.js

import React from 'react';
import '../styles/headerStyles.css';
import logo from '../assets/Logos/goal-logo-color-1-rgb.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <div className="logo wrapper">
          <a href="" className="logo">
              <img src={logo} alt="GoalTV Logo" className="logo-image" />
          </a>
        </div>
        <div className="nav-wrapper">
          <a href="" className="logo">Shows</a>
          <a href="" className="logo">Subscribe</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
