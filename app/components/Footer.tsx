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
            <a href="" aria-label="TikTok">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 27.5 11 C 28.33 11 29 11.67 29 12.5 C 29 15.53 31.47 18 34.5 18 C 35.33 18 36 18.67 36 19.5 C 36 20.33 35.33 21 34.5 21 C 32.4 21 30.48 20.240469 29 18.980469 L 29 29 C 29 33.41 25.41 37 21 37 C 16.59 37 13 33.41 13 29 C 13 24.59 16.59 21 21 21 C 21.21 21 21.419141 21.009531 21.619141 21.019531 C 22.449141 21.089531 23.07 21.810859 23 22.630859 C 22.94 23.460859 22.220625 24.079531 21.390625 24.019531 C 21.260625 24.009531 21.13 24 21 24 C 18.24 24 16 26.24 16 29 C 16 31.76 18.24 34 21 34 C 23.76 34 26 31.76 26 29 L 26 12.5 C 26 11.67 26.67 11 27.5 11 z"></path>
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
            <a href="" aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path d="M 23.857422 8.5 C 17.504717 8.5 11.602344 8.9526234 8.234375 9.65625 A 1.50015 1.50015 0 0 0 8.2128906 9.6621094 C 5.6754768 10.230693 3.2861897 12.048234 2.7832031 14.894531 A 1.50015 1.50015 0 0 0 2.78125 14.90625 C 2.394836 17.200265 2 20.190694 2 24.5 C 2 28.801151 2.3961903 31.712324 2.8847656 34.126953 C 3.4000756 36.889296 5.7342165 38.761817 8.3105469 39.337891 A 1.50015 1.50015 0 0 0 8.3476562 39.347656 C 11.86271 40.040284 17.598467 40.5 23.951172 40.5 C 30.303877 40.5 36.042686 40.04028 39.558594 39.347656 A 1.50015 1.50015 0 0 0 39.595703 39.337891 C 42.133117 38.769306 44.522404 36.951766 45.025391 34.105469 A 1.50015 1.50015 0 0 0 45.029297 34.083984 C 45.409789 31.743169 45.902812 28.755621 46 24.439453 A 1.50015 1.50015 0 0 0 46 24.40625 C 46 20.087697 45.50571 17.078675 45.023438 14.695312 C 44.512192 11.927074 42.175378 10.049478 39.595703 9.4726562 A 1.50015 1.50015 0 0 0 39.476562 9.4511719 C 36.0464 8.9689502 30.211115 8.5 23.857422 8.5 z M 20.15625 17.001953 C 20.526656 16.994297 20.909531 17.081906 21.269531 17.285156 L 29.873047 22.146484 C 31.324047 22.966484 31.324047 25.035469 29.873047 25.855469 L 21.269531 30.716797 C 19.830531 31.528797 18.037109 30.500328 18.037109 28.861328 L 18.037109 19.138672 C 18.037109 17.909422 19.045031 17.024922 20.15625 17.001953 z"></path>
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
                <Link href="/topics" className={styles.siteMapLink}>
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
                <Link href="/committee" className={styles.siteMapLink}>
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
            <Link href="/privacy">
              <p className={styles.privacy}>Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
