// src/components/Header.js

import React from 'react';
import '../styles/headerStyles.css';
import logo from '../assets/Logos/goal-logo-rgb.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <a href="#home" className="logo">
            <img src={logo} alt="GoalTV Logo" className="logo-image" />
        </a>

      </div>
    </header>
  );
};

export default Header;
