import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Container style for the map
const containerStyle = {
  width: '100%',
  height: '500px',
};

// Initial map center (some starting location)
const center = {
  lat: 40.712776,
  lng: -74.005974, // New York
};

const MapComponent = () => {
  // State to store the current location of the courier
  const [courierLocation, setCourierLocation] = useState({
    lat: 40.712776,
    lng: -74.005974, // Start in New York
  });

  // Function to simulate courier movement
  const simulateCourierMovement = () => {
    const newLat = courierLocation.lat + (Math.random() - 0.5) * 0.01;
    const newLng = courierLocation.lng + (Math.random() - 0.5) * 0.01;
    setCourierLocation({
      lat: newLat,
      lng: newLng,
    });
  };

  // Simulate real-time updates (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(simulateCourierMovement, 3000);
    return () => clearInterval(interval);
  }, [courierLocation]);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={courierLocation}
        zoom={10}
      >
        {/* Marker to show courier's current position */}
        <Marker position={courierLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
