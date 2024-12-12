"use client";

import { useEffect, useRef } from "react";
import styles from "./Marquee.module.css";

const Marquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    let elWidth = el.offsetWidth;
    let windowWidth = window.innerWidth;

    let mouseX = 0;
    let prevMouseX = 0;

    let skewTarget = 0;
    let translateTarget = 0;

    let skewWithEasing = 0;
    let translateWithEasing = 0;

    const skewEasingFactor = 0.1;
    const translateEasingFactor = 0.05;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.pageX;
    };

    const handleResize = () => {
      elWidth = el.offsetWidth;
      windowWidth = window.innerWidth;
    };

    const lerp = (start: number, end: number, factor: number) => {
      return (1 - factor) * start + factor * end;
    };

    const animateMe = () => {
      skewTarget = mouseX - prevMouseX;
      prevMouseX = mouseX;

      translateTarget = ((elWidth - windowWidth) / windowWidth) * mouseX * -0.4;
      skewWithEasing = lerp(skewWithEasing, skewTarget, skewEasingFactor);
      skewWithEasing = Math.min(Math.max(parseInt(skewWithEasing.toString()), -75), 75);

      translateWithEasing = lerp(translateWithEasing, translateTarget, translateEasingFactor);

      el.style.transform = `translateX(${translateWithEasing}px) skew(${skewWithEasing}deg)`;

      window.requestAnimationFrame(animateMe);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    window.requestAnimationFrame(animateMe);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles["marquee"]}>
      <div className={styles["marquee-wrapper"]} ref={marqueeRef}>
        <div className={styles["marquee-img"]}></div>
        <p className={styles["marquee-text"]}>
          The CONVR2025 proceedings will be published and indexed by Springer.
        </p>
        <div className={styles["marquee-img"]}></div>
        <p className={styles["marquee-text"]}>
          The CONVR2025 proceedings will be published and indexed by Springer.
        </p>
        <div className={styles["marquee-img"]}></div>
        <p className={styles["marquee-text"]}>
          The CONVR2025 proceedings will be published and indexed by Springer.
        </p>
        <div className={styles["marquee-img"]}></div>
        <p className={styles["marquee-text"]}>
          The CONVR2025 proceedings will be published and indexed by Springer.
        </p>
      </div>
    </div>
  );
};

export default Marquee;
