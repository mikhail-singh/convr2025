import React from "react";
import Image from "next/image";
import styles from "./ImgTextBanner.module.css";

const ImgTextBanner = () => {
  return (
    <div className={styles["container-wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["left-container"]}>
          <div className={styles["img-wrapper"]}>
            <Image
              src="/images/topics_image.webp"
              className={styles["image"]}
              alt="Topics"
              width={320} 
              height={480}
            />
          </div>
        </div>
        <div className={styles["right-container"]}>
          <h1>Topics</h1>
          <ul>
            <li>Extended Reality in Built Environment</li>
            <li>Intelligent Design and Construction Technologies</li>
            <li>Smart and Sustainable Building Strategies & Solutions</li>
            <li>Interconnected Construction Ecosystems</li>
            <li>Human-Centric Digital Design and Construction</li>
            <li>
              Digital Innovations for Achieving Net Zero and Matters of Climate
              Change in the Built Environment
            </li>
            <li>Digital Twin Technology for Sustainable Design</li>
            <li>
              AI and Machine Learning for Energy-Efficient Building Design
            </li>
            <li>
              Digital Revolution to Enable Circular Economy in Built Environment
            </li>
            <li>Advanced Digital Manufacturing in Built Environment</li>
            <li>
              Digital and Circular Economy in the Built Environment Industry
            </li>
            <li>
              Infrastructure Asset Management using Immersive Technologies
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ImgTextBanner);
