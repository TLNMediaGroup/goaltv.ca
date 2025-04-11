import React, { useRef, useEffect, useState } from 'react';
import '../styles/newsletterStyles.css'; // Ensure the path is correct
import Logo from '../assets/Logos/goal-logo-color-3-rgb.png';
import SoccerBall from '../assets/Icons/ball.png'

const Newsletter = () => {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // When the section is at least 50% visible, activate the animation
        if (entry.isIntersecting) {
          setIsActive(true);
        } else {
          // When the section is not sufficiently visible, retract the animation
          setIsActive(false);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`newsletter ${isActive ? 'active' : ''}`}>
      {/* Background Asset */}
      <img src={SoccerBall} alt="Soccer Ball" className="background-logo" />
      <div className="newsletter-container">
        {/* Logo */}
        <img src={Logo} alt="Newsletter Logo" className="newsletter-logo" />
        {/* Headline */}
        <h2>NEWSLETTER</h2>
        {/* Subscribe Button */}
        <a href="/subscribe" className="subscribe-btn">SUBSCRIBE NOW</a>
      </div>
    </section>
  );
};

export default Newsletter;
