"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Btn from "./Button";
import styles from "./NavBar.module.css";

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
          <div className={styles.divider} />
          <Link href="https://acccbe.org/">
            <Image
              src="/ACCCBE.webp"
              alt="ACCCBE Logo"
              className={styles["logo"]}
              width={70}
              height={36}
            />
          </Link>
        </div>
        <div className={styles["hamburger-menu"]} onClick={toggleMenu}>
          <div className={`${styles["bar"]} ${isOpen ? styles["change"] : ""}`}></div>
          <div className={`${styles["bar"]} ${isOpen ? styles["change"] : ""}`}></div>
          <div className={`${styles["bar"]} ${isOpen ? styles["change"] : ""}`}></div>
        </div>
        <nav className={`${styles["menu-links"]} ${isOpen ? styles["open"] : ""}`}>
          <Link href="/" className={styles["menu-link"]} onClick={toggleMenu}>
            Home
          </Link>
          <Link href="https://acccbe.org/about/" className={styles["menu-link"]} onClick={toggleMenu}>
            About
          </Link>
          <Link href="https://acccbe.org/engineering-conference-themes/" className={styles["menu-link"]} onClick={toggleMenu}>
            Topics
          </Link>
          <Link href="https://acccbe.org/submissions/" className={styles["menu-link"]} onClick={toggleMenu}>
            Papers
          </Link>
          <Link href="https://acccbe.org/committees/" className={styles["menu-link"]}>
            Organisers
          </Link>
          <Link href="https://acccbe.org/engineering-conference-themes/" className={styles["menu-link"]}>
            Program
          </Link>
          <Link href="https://acccbe.org/accommodation/" className={styles["menu-link"]}>
            Venue
          </Link>
          <Link href="https://acccbe.org/contact-us/" className={styles["menu-link"]} onClick={toggleMenu}>
            Contact
          </Link>
          <Link href="/" className={styles["menu-link"]}>
            <Btn text="Register" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
