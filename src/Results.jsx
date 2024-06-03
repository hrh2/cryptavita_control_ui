import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('https://cryptavita-mg-ai.onrender.com');

export default function Results() {
  const [imageDescriptions, setImageDescriptions] = useState([]);

  useEffect(() => {
    // Listen for 'descriptionAndImage' event from the server
    socket.on('descriptionAndImage', (data) => {
      setImageDescriptions(prevDescriptions => [...prevDescriptions, data]);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off('descriptionAndImage');
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">AI Model and Computer Vision Results</h1>
        <p className="text-lg mt-2">These are the results returned by the AI model and computer vision analysis.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imageDescriptions.map((imageDesc, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <img
              className="h-auto max-w-full rounded-lg mb-2"
              src={`data:image/jpeg;base64,${arrayBufferToBase64(imageDesc.image)}`}
              alt={`Image ${index}`}
            />
            <div className="text-center">
              <p>{imageDesc.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Function to convert ArrayBuffer to base64 string
function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
