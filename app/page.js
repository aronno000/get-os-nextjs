"use client"
import { useState, useEffect } from 'react';

function OSInfo() {
  const [osDetails, setOSDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/os')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setOSDetails(data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      {error ? (
        <p>Error loading OS details: {error}</p>
      ) : osDetails ? (
        <ul>
          <li>Platform: {osDetails.platform}</li>
          <li>Release: {osDetails.release}</li>
          <li>Type: {osDetails.type}</li>
        </ul>
      ) : (
        <p>Loading OS details...</p>
      )}
    </div>
  );
}

export default OSInfo;
