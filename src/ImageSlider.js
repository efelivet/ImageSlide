 import React, { useState, useEffect } from "react";
import "./App.css";

const images = [
  
    'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
   
      ];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <img src={images[index]} className="slide-image" alt="slide" />

      {/* Controls */}
      <button className="btn prev" onClick={prevSlide}>❮</button>
      <button className="btn next" onClick={nextSlide}>❯</button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
