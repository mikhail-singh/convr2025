import React from "react";
import styles from "./Contact.module.css";

const Banner = () => {
  return (
    <div className={styles["container-wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["vstack"]}>
          <div className={styles["container-title2"]}>
            <h2>Have any enquiries?</h2>
          </div>
          <div className={styles["container-title2"]}>
            <h1>Get in Touch</h1>
          </div>
          <div className={styles["container-body"]}>
            <p>Email:</p>
            <a
              href="mailto:convr2024@westernsydney.edu.au"
              className={styles["email-link"]}
            >
              info@convr2025.com
            </a>
            <a
              href="mailto:a.hajirasouli@westernsydney.edu.au"
              className={styles["email-link"]}
            >
              a.hajirasouli@westernsydney.edu.au
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Banner);
