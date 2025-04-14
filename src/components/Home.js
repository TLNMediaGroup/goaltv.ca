// src/pages/Home.js

import React from 'react';
import '../styles/homeStyles.css';
import DesktopPromo from '../assets/Videos/Channel_Promo/Goal-Header-Desktop.mp4';
import MobilePromo from '../assets/Videos/Channel_Promo/Goal-Header-Mobile.mp4';
import Carousel from './Carousel';
import NewsletterSection from './Newsletter';
import BrandDesktop from '../assets/Logos/logo-change-desktop.webp';
import BrandMobile from '../assets/Logos/logo-change-mobile.webp';
import RogersDesktop from '../assets/Logos/where-to-watch-desktop.webp';
import RogersMobile from '../assets/Logos/where-to-watch-desktop.webp';
const Home = () => {
  return (
    <main className="home">
      {/* Video Promotion Section */}
      <section className="video-promo">
        <div className="video-container">
          {/* Replace the video src with your promotional video file */}
          <video autoPlay loop muted className="promo-video desktop-promo">
            <source src={DesktopPromo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video autoPlay loop muted className="promo-video mobile-promo">
            <source src={MobilePromo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      {/* Intro Section */}
        <section className="page-content intro-section">
        <h2 id="we-speak-soccer-title">WE SPEAK SOCCER</h2>
        <h2 className="we-speak-soccer-sub-title">A Bolder Identity <br className='mobile'></br>A Renewed Commitment.</h2>
        <img src={BrandDesktop} alt="Goal Channel Logo" className="brand-change-logo desktop"></img>
        <img src={BrandMobile} alt="Goal Channel Logo" className="brand-change-logo mobile"></img>
      </section>
      {/* Where To Watch Section */}
      <section className="page-content where-to-watch-section">
        <img src={RogersDesktop} alt="Rogers Channel Logo" className="channel-logo desktop"></img>
        <img src={RogersMobile} alt="Rogers Channel Logo" className="channel-logo mobile"></img>
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
      {/* Goal Newsletter Section */}
      <NewsletterSection/>
    </main>
  );
};

export default Home;
