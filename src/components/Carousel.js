// src/components/Carousel.js

import React, { useState, useEffect } from 'react';
import '../styles/carouselStyles.css';
import dictionaryData from '../dictionary/dictionaryjson';

const Carousel = ({ category, showType, season }) => {
  const [showsMap, setShowsMap] = useState(new Map());

  useEffect(() => {
    // Debug logging
    console.log('dictionaryData:', dictionaryData);
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

  return (
    <div className="carousel">
      <div className="collection" id={`${category}-collection`}>
        {filteredShows.map(show => {
          // Determine the base class and image source using showType.
          const cardClass = showType === 'series'
            ? 'showCard seriesCard'
            : 'showCard filmCard';
          const imageSource = showType === 'series'
            ? show.img_URL
            : show.poster_URL;
          return (
            <div className={cardClass} key={show._id}>
              {/* Base card content */}
              <img src={imageSource} alt={show.title} />
              {showType === 'series' && (
                <span className="showTitle">
                  {show.title}
                  {season ? ` (Season ${season})` : ''}
                </span>
              )}
              {/* Hover overlay */}
              <div className="hoverCard">
                <img src={show.img_URL} alt={`${show.title} overlay`} className="hoverImage" />
                <div className="hoverInfo">
                  <h3>{show.title}</h3>
                  <p className="showTime">{show.show_time}</p>
                  <p className="synopsis">{show.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
