import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ images, carouselId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel" id={carouselId}>
      <div className="carousel-inner relative w-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide absolute w-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image.src} alt={image.alt} className="object-cover w-full h-64" />
          </div>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })).isRequired,
  carouselId: PropTypes.string.isRequired,
};

export default Carousel;
