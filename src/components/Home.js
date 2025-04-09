// src/pages/Home.js

import React from 'react';
import '../styles/homeStyles.css';
import Promo from '../assets/Videos/Channel_Promo/euro-promo.mp4'
import Dictionary from './Dictionary';

const Home = () => {
  return (
    <main className="home">
      {/* Video Promotion Section */}
      <section className="video-promo">
        <div className="video-container">
          {/* Replace the video src with your promotional video file */}
          <video autoPlay loop muted className="promo-video">
            <source src={Promo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="promo-overlay">
            <h1>Experience the Passion</h1>
            <p>Welcome to Goal</p>
          </div>
        </div>
      </section>

      {/* Series Airing Section */}
      <section className="content-section series-section">
        <h2 className="section-title">Series Airing</h2>
        <div className="section-content">
          <p>Series content will be populated here.</p>
        </div>
      </section>

      {/* Specials Airing Section */}
      <section className="content-section specials-section">
        <h2 className="section-title">Specials Airing</h2>
        <div className="section-content">
          <p>Specials content will be populated here.</p>
        </div>
      </section>

      {/* TLN Originals Section */}
      <section className="content-section original-films-section">
        <h2 className="section-title">TLN Original Productions</h2>
        <div className="section-content">
          <p>Original production films will be populated here.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
