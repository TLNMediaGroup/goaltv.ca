import React, { useState, useEffect } from 'react';

const Dictionary = () => {
  // Initialize state with an empty Map instance.
  const [showsMap, setShowsMap] = useState(new Map());

  useEffect(() => {
    // Fetch data from the API.
    fetch('https://api.tlnmediagroup.com/schedule/tln')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        // Assuming data is an array of shows
        // Populate the Map with each show, keyed by its unique `id`
        const map = new Map();
        data.forEach(show => {
          map.set(show.id, show);
        });
        setShowsMap(map);
      })
      .catch(error => {
        console.error('Error fetching schedule:', error);
      });
  }, []); // This effect runs once when the component mounts

  // Helper function to quickly look up a show by its ID.
  const getShowById = (id) => showsMap.get(id);

  return (
    <div className="dictionary">
      <h2>Programming Schedule Dictionary</h2>
      <ul>
        {Array.from(showsMap.values()).map((show) => (
          <li key={show.id}>
            <strong>{show.title}</strong>: {show.description}
          </li>
        ))}
      </ul>

      {/* Example: Lookup a specific show */}
      <div>
        <h3>Lookup Example:</h3>
        <pre>
          {JSON.stringify(getShowById('some-show-id') || 'Show not found', null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Dictionary;
