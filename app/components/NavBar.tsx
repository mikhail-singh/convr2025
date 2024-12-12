"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Btn from "./Button";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["nav-wrapper"]}>
        <div className={styles["logos"]}>
          <Link href="/">
            <Image
              src="/convr2025_logo.png"
              alt="CONVR Logo"
              className={styles["logo"]}
              width={100}
              height={32}
            />
          </Link>
        </div>
        <div className={styles["hamburger-menu"]} onClick={toggleMenu}>
          <div
            className={`${styles["bar"]} ${isOpen ? styles["change"] : ""}`}
          ></div>
          <div
            className={`${styles["bar"]} ${isOpen ? styles["change"] : ""}`}
          ></div>
          <div
            className={`${styles["bar"]} ${isOpen ? styles["change"] : ""}`}
          ></div>
        </div>
        <nav
          className={`${styles["menu-links"]} ${isOpen ? styles["open"] : ""}`}
        >
          {location.pathname === "/" ? (
            <>
              <a
                href="#home"
                className={styles["menu-link"]}
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className={styles["menu-link"]}
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#topics"
                className={styles["menu-link"]}
                onClick={toggleMenu}
              >
                Topics
              </a>
              <a
                href="#speakers"
                className={styles["menu-link"]}
                onClick={toggleMenu}
              >
                Speakers
              </a>
              <a
                href="#papers"
                className={styles["menu-link"]}
                onClick={toggleMenu}
              >
                Papers
              </a>
              <Link href="/organisers" className={styles["menu-link"]}>
                Organisers
              </Link>
              <Link href="/program" className={styles["menu-link"]}>
                Program
              </Link>
              <Link href="/travel" className={styles["menu-link"]}>
                Venue
              </Link>
              <a
                href="#contact"
                className={styles["menu-link"]}
                onClick={toggleMenu}
              >
                Contact
              </a>
            </>
          ) : (
            <>
              <div
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={styles["menu-link"]}
              >
                Home
              </div>
              <div
                onClick={() =>
                  window.scrollTo({ top: 1560, behavior: "smooth" })
                }
                className={styles["menu-link"]}
              >
                About
              </div>
              <div
                onClick={() =>
                  window.scrollTo({ top: 4900, behavior: "smooth" })
                }
                className={styles["menu-link"]}
              >
                Topics
              </div>
              <div
                onClick={() =>
                  window.scrollTo({ top: 5580, behavior: "smooth" })
                }
                className={styles["menu-link"]}
              >
                Speakers
              </div>
              <div
                onClick={() =>
                  window.scrollTo({ top: 6500, behavior: "smooth" })
                }
                className={styles["menu-link"]}
              >
                Papers
              </div>
              <Link href="/organisers" className={styles["menu-link"]}>
                Organisers
              </Link>
              <Link href="/program" className={styles["menu-link"]}>
                Program
              </Link>
              <Link href="/travel" className={styles["menu-link"]}>
                Venue
              </Link>
              <div
                onClick={() =>
                  window.scrollTo({ top: 11200, behavior: "smooth" })
                }
                className={styles["menu-link"]}
              >
                Contact
              </div>
            </>
          )}

          <div className={styles["menu-link"]}>
            <Btn text="Register" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
