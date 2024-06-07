import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const MapContainer = ({ origin, destination }) => {
  const [directions, setDirections] = useState(null);

  // Function to fetch directions from origin to destination
  useEffect(() => {
    if (origin && destination) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: 'DRIVING' // or another mode if applicable
        },
        (result, status) => {
          if (status === 'OK') {
            setDirections(result);
          } else {
            console.error('Error fetching directions:', status);
          }
        }
      );
    }
  }, [origin, destination]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBvvU6jaJbByhHnsqL2xrCT3FprNdyG6kc">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        zoom={14}
        center={origin}
      >
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              markerOptions: {
                origin: {
                  icon: {
                    url: 'https://maps.google.com/mapfiles/kml/paddle/grn-blank.png' // URL to your custom icon for origin
                  },
                  label: {
                    text: 'Origin', // Custom label for origin
                    color: 'blue' // Custom color for origin label
                  }
                },
                destination: {
                  icon: {
                    url: 'https://maps.google.com/mapfiles/kml/paddle/red-blank.png' // URL to your custom icon for destination
                  },
                  label: {
                    text: 'Destination', // Custom label for destination
                    color: 'red' // Custom color for destination label
                  }
                }
              }
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
