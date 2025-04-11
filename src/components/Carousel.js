// src/components/Carousel.js

import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import '../styles/carouselStyles.css';
import dictionaryData from '../dictionary/dictionaryjson';

const HoverCardPortal = ({ children, position }) => {
  return ReactDOM.createPortal(
    <div
      className="hoverCardPortal"
      style={{
        position: 'absolute',
        top: position.centerY,        // position at the vertical center
        left: position.left,          // adjusted left (card left - extraHorizontal)
        width: position.width,        // card width plus extra space on each side
        minHeight: position.minHeight, // ensure a minimum height equal to the card's height
        height: 'fit-content',        // height will adjust based on content if larger
        transform: 'translateY(-50%)',// centers the overlay vertically relative to its center
        zIndex: 9999,
      }}
    >
      {children}
    </div>,
    document.body
  );
};

const ShowCard = ({ show, showType }) => {
  const cardRef = useRef(null);
  const [hoverPosition, setHoverPosition] = useState(null);
  const [showHover, setShowHover] = useState(false);

  // Extra horizontal space: 30px each side.
  const extraHorizontal = 30;

  const handleMouseEnter = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerY = rect.top + window.pageYOffset + rect.height / 2;
      // Capture the height of the card as minHeight for the overlay.
      setHoverPosition({
        centerY, // vertical center of the card
        left: rect.left + window.pageXOffset - extraHorizontal,
        width: rect.width + extraHorizontal * 2,
        minHeight: rect.height,
      });
    }
    setShowHover(true);
  };

  const handleMouseLeave = () => {
    setShowHover(false);
  };

  const cardClass = showType === 'series' ? 'showCard seriesCard' : 'showCard filmCard';
  const imageSource = showType === 'series' ? show.img_URL : show.poster_URL;

  return (
    <div
      className={cardClass}
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSource} alt={show.title} className="showCardImage" />
      {showHover && hoverPosition && (
        <HoverCardPortal position={hoverPosition}>
          <div className="hoverCard" style={{ width: '100%', height: '100%' }}>
            <img
              src={show.img_URL}
              alt={`${show.title} overlay`}
              className="hoverImage"
              style={{ 
                width: '100%',
                height: showType === 'series' ? '160px' : '100%',
                objectFit: 'cover',
              }}
            />
            <div className="hoverInfo">
              <h3>{show.title}</h3>
              <p className="synopsis">{show.description}</p>
            </div>
          </div>
        </HoverCardPortal>
      )}
    </div>
  );
};



/**
 * Carousel component renders a horizontal scrolling collection of shows.
 */
const Carousel = ({ category, showType, season }) => {
  const [showsMap, setShowsMap] = useState(new Map());
  const collectionRef = useRef(null);

  useEffect(() => {
    if (!Array.isArray(dictionaryData)) {
      console.error('Expected an array but got:', dictionaryData);
      return;
    }
    const map = new Map();
    dictionaryData.forEach(show => {
      map.set(show._id, show);
    });
    setShowsMap(map);
  }, []);

  // Filter shows based on the provided category.
  const filteredShows = Array.from(showsMap.values()).filter(show =>
    show.category && show.category.includes(category)
  );

  const handleNext = () => {
    const container = collectionRef.current;
    if (!container) return;
    const visibleWidth = container.clientWidth;
    const maxScrollLeft = container.scrollWidth - visibleWidth;
    const currentScroll = container.scrollLeft;
    const tolerance = 5; // pixels tolerance
  
    // If we're within `tolerance` pixels of the maximum, loop to the beginning.
    if (currentScroll >= maxScrollLeft - tolerance) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      const remaining = maxScrollLeft - currentScroll;
      const scrollByAmount = remaining < visibleWidth ? remaining : visibleWidth;
      container.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
    }
  };
  
  const handlePrev = () => {
    const container = collectionRef.current;
    if (!container) return;
    const visibleWidth = container.clientWidth;
    const currentScroll = container.scrollLeft;
    const tolerance = 5; // pixels tolerance
  
    // If we're at or within `tolerance` of 0, loop to the end.
    if (currentScroll <= tolerance) {
      const maxScrollLeft = container.scrollWidth - visibleWidth;
      container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
    } else {
      const scrollByAmount = currentScroll < visibleWidth ? currentScroll : visibleWidth;
      container.scrollBy({ left: -scrollByAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="carousel">
      {/* Navigation arrows placed outside the scrollable wrapper */}
      <div className="carousel-btn prev-btn" onClick={handlePrev}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 100">
          <polygon points="50,10 50,90 0,50" fill="#7ac71f" />
        </svg>
      </div>
      <div className="carousel-btn next-btn" onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 100">
          <polygon points="0,10 0,90 50,50" fill="#7ac71f" />
        </svg>
      </div>

      {/* A wrapper that hides overflow, with the scrollable content inside */}
      <div className="collection-wrapper">
        <div className="collection" ref={collectionRef}>
          {filteredShows.map(show => (
            <ShowCard key={show._id} show={show} showType={showType} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
