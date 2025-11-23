import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const images = [
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Start autoplay
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  // Slide animation
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  // Manual Navigation
  const next = () => {
    stopAutoPlay();
    setIndex((prev) => (prev + 1) % images.length);
    startAutoPlay();
  };

  const prev = () => {
    stopAutoPlay();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    startAutoPlay();
  };

  return (
    <div className="sliderWrapper">
      <div className="slider" ref={sliderRef}>
        {images.map((img, i) => (
          <img src={img} key={i} alt="slide" className="slide" />
        ))}
      </div>

      {/* Controls */}
      <button className="nav prev" onClick={prev}>❮</button>
      <button className="nav next" onClick={next}>❯</button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
