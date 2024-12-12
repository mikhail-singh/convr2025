import React from "react";
import Btn from "./Button";
import styles from "./Banner.module.css";

interface Props {
  text1: string;
  text2: string;
}

const Banner = ({ text1, text2 }: Props) => {
  return (
    <div className={styles["container-wrapper"]}>
      <div className={styles["vstack"]}>
        <div className={`${styles["container-title"]}`}>
          <h2>{text1}</h2>
        </div>
        <div className={`${styles["container-body"]}`}>
          <h1>{text2}</h1>
        </div>
        <div className={styles["link-wrapper"]}>
          <div>
            <Btn text="View Program" href="#program" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Banner);
