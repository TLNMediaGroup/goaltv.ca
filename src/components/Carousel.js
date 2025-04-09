// src/components/Carousel.js

import React, { useState, useEffect } from 'react';
import dictionaryData from '../dictionary/dictionaryjson';

const Carousel = ({ category }) => {
  const [showsMap, setShowsMap] = useState(new Map());
  const dataArray = dictionaryData.dictionary;


  useEffect(() => {
    // Debug: log the imported dictionaryData to inspect its type
    console.log('dictionaryData:', dictionaryData);
    console.log('Is dictionaryData an Array?', Array.isArray(dictionaryData));

    // Safeguard: only process if dictionaryData is an array.
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

  // Filter shows that include the provided category.
  const filteredShows = Array.from(showsMap.values()).filter(show =>
    show.category && show.category.includes(category)
  );

  return (
    <div className="carousel">
      <ul>
        {filteredShows.map(show => (
          <li key={show._id}>
            <strong>{show.title}</strong>: {show.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
