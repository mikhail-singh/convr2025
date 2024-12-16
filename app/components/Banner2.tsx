import React from "react";
import styles from "./Banner2.module.css";

interface Props {
  title1: string;
  title2?: string;
}

const Banner = ({ title1, title2 }: Props) => {
  return (
    <div className={styles["container-wrapper"]}>
      <div className={styles["container-title"]}>
        <h1>{title1}</h1>
      </div>
      <div className={styles["container-title2"]}>
        <h2>{title2}</h2>
      </div>
      <div className={styles["container-body"]}>
        <ul className={styles["list-items"]}>
          <li>
            <p>
              <strong>National and International Keynote Speakers: </strong>
            </p>
            <p>
              Gain insights from leading experts and visionaries who will share
              their knowledge on the latest trends and innovations shaping the
              future of architecture and construction.
            </p>
          </li>
          <li>
            <p>
              <strong>Industry Expo and Exhibition: </strong>
            </p>
            <p>
              Discover and showcase cutting-edge technologies, processes, and
              products. This is a perfect platform for AIA NSW Chapter members
              to exhibit their advancements and gain visibility.
            </p>
          </li>
          <li>
            <p>
              <strong>Industry Panel Discussions: </strong>
            </p>
            <p>
              Engage in thought-provoking discussions on current challenges and
              future opportunities in the field, featuring peers and industry
              experts.
            </p>
          </li>
          <li>
            <p>
              <strong>Gala Dinner and Networking Events: </strong>
            </p>
            <p>
              Build valuable connections with fellow professionals, potential
              clients, and collaborators in a relaxed and enjoyable setting.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Banner);
