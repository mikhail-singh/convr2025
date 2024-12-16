// Footer.tsx
import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSocials}>
          <div className={styles["social-wrapper"]}>
            <a href="" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path d="M 16.5 5 C 10.159 5 5 10.159 5 16.5 L 5 31.5 C 5 37.841 10.159 43 16.5 43 L 31.5 43 C 37.841 43 43 37.841 43 31.5 L 43 16.5 C 43 10.159 37.841 5 31.5 5 L 16.5 5 z M 34 12 C 35.105 12 36 12.895 36 14 C 36 15.104 35.105 16 34 16 C 32.895 16 32 15.104 32 14 C 32 12.895 32.895 12 34 12 z M 24 14 C 29.514 14 34 18.486 34 24 C 34 29.514 29.514 34 24 34 C 18.486 34 14 29.514 14 24 C 14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z"></path>
              </svg>
            </a>
            <a href="" aria-label="Twitter (X)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path d="M 12.5 6 C 8.916 6 6 8.916 6 12.5 L 6 35.5 C 6 39.084 8.916 42 12.5 42 L 35.5 42 C 39.084 42 42 39.084 42 35.5 L 42 12.5 C 42 8.916 39.084 6 35.5 6 L 12.5 6 z M 13.828125 14 L 20.265625 14 L 25.123047 20.943359 L 31.136719 14 L 33.136719 14 L 26.025391 22.234375 L 34.257812 34 L 27.820312 34 L 22.470703 26.351562 L 15.865234 34 L 13.822266 34 L 21.564453 25.056641 L 13.828125 14 z M 16.935547 15.695312 L 28.587891 32.304688 L 31.150391 32.304688 L 19.498047 15.695312 L 16.935547 15.695312 z"></path>
              </svg>
            </a>
            <a href="" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path d="M36.5,6h-25C8.468,6,6,8.468,6,11.5v25c0,3.032,2.468,5.5,5.5,5.5h25c3.032,0,5.5-2.468,5.5-5.5v-25	C42,8.468,39.532,6,36.5,6z M18,34c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1V34z M15.5,18c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C18,16.881,16.881,18,15.5,18z M35,34	c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1v-7.5c0-1.379-1.121-2.5-2.5-2.5S25,25.121,25,26.5V34c0,0.553-0.447,1-1,1h-3	c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1v0.541C26.063,20.586,27.462,20,29,20c3.309,0,6,2.691,6,6V34z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.footerLineWrapper}>
          <div className={styles.footerLine}></div>
        </div>
        <div className={styles.footerFlex}>
          {/* Left Section: Site Map */}
          <div className={styles.siteMap}>
            <div className={styles.siteMapFlex}>
              {/* ABOUT Section */}
              <div className={styles.siteMapSection}>
                <p className={styles.sectionTitle}>QUICK LINKS</p>
                <Link href="/" className={styles.siteMapLink}>
                  Home
                </Link>
                <Link href="/about" className={styles.siteMapLink}>
                  About
                </Link>
                <Link href="https://acccbe.org/engineering-conference-themes/" className={styles.siteMapLink}>
                  Topics
                </Link>
                <Link href="/venue" className={styles.siteMapLink}>
                  Venue
                </Link>{" "}
              </div>

              {/* Papers Section */}
              <div className={styles.siteMapSection}>
                <p className={styles.sectionTitle}>PAPER SUBMISSION</p>
                <Link href="/" className={styles.siteMapLink}>
                  Papers
                </Link>
                <Link href="/organisers" className={styles.siteMapLink}>
                  Organisers
                </Link>
                <Link href="https://acccbe.org/committees/" className={styles.siteMapLink}>
                  Committee
                </Link>
                <Link href="/speakers" className={styles.siteMapLink}>
                  Speakers
                </Link>{" "}
              </div>

              {/* COMPANY Section */}
              <div className={styles.siteMapSection}>
                <p className={styles.sectionTitle}>COMPANY</p>
                <Link href="/history" className={styles.siteMapLink}>
                  History
                </Link>
                <Link href="/contact" className={styles.siteMapLink}>
                  Contact
                </Link>
                <a
                  href="mailto:info@convr2025.com"
                  className={styles.siteMapLink}
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Right Section: Logo and Copyright */}
          <div className={styles.footer}>
            <p className={styles.copyright}>
              ©2025 CONVR2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
