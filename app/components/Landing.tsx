"use client";

import React, { useState, useEffect } from "react";
import Btn from "./Button";
import styles from "./Landing.module.css";

interface ResponsiveImageProps {
  alt?: string;
}

const images = ["/landing5", "/landing2", "/landing2"];

const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};

const Landing: React.FC<ResponsiveImageProps> = ({ alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all images
  useEffect(() => {
    images.forEach((image) => preloadImage(image));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className={styles["container"]}>
      <div className={styles["header-wrapper"]}>
        <div className={styles["image-wrapper"]}>
          {images.map((image, index) => (
            <img
              key={index}
              className={`${styles["background"]} ${
                index === currentIndex ? styles["fade-in"] : styles["fade-out"]
              }`}
              src={`${image}.jpg`}
              alt={alt}
            />
          ))}
        </div>
        <div className={styles["text-container"]}>
          <p>20 Nov 2025</p>
          <h1>CONVR 2025</h1>
          <h1 className={styles.title}>Cape Town, South Africa</h1>
          <Btn
            text="Register"
            href=""
            width={150}
          />
        </div>

        <div className={styles["right-container"]}>
          <div className={styles["circles"]}>
            {images.map((_, index) => (
              <div
                key={index}
                className={`${styles["circle"]} ${
                  index === currentIndex ? styles["activeCircle"] : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Landing);
