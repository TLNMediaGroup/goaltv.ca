// src/pages/Home.js

import React from 'react';
import '../styles/homeStyles.css';
import Promo from '../assets/Videos/Channel_Promo/euro-promo.mp4'
import Carousel from './Carousel';

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
      <section className="page-content series-section">
        <h2 className="section-title">Series Airing</h2>
        <div className="section-content">
        <Carousel category="Series" showType="series" season="S1" />
        </div>
      </section>

      {/* Specials Airing Section */}
      <section className="page-content specials-section">
        <h2 className="section-title">Specials Airing</h2>
        <div className="section-content">
        <Carousel category="Specials" showType="film" />
        </div>
      </section>

      {/* TLN Originals Section */}
      <section className="page-content original-films-section">
        <h2 className="section-title">TLN Original Productions</h2>
        <div className="section-content">
          <Carousel category="TLN Originals" showType="film" />
        </div>
      </section>
    </main>
  );
};

export default Home;
