/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Envelope = ({ onOpen, isOpened }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onOpen();
      setIsAnimating(false); // Stop animating after opening
    }, 1000); // delay untuk animasi
  };

  useEffect(() => {
    if (isOpened) {
      setIsAnimating(false);
    }
  }, [isOpened]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {isAnimating ? (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-xl text-gray-700">Mohon tunggu sedang Membuka Undangan...</p>
        </div>
      ) : !isOpened ? (
        <div className="relative w-64 h-48">
          <div className="absolute inset-0 bg-white border border-gray-300 shadow-lg rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-600 to-teal-900 transform -skew-y-6 rounded-lg"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <button 
                onClick={handleOpen} 
                className="px-4 py-2 bg-white text-teal-600 font-semibold rounded-md shadow-md hover:bg-gray-100">
                Buka Undangan
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-xl text-gray-700">Undangan Terbuka</p>
        </div>
      )}
    </div>
  );
};

Envelope.propTypes = {
  onOpen: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
};

export default Envelope;
