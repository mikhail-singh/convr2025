import Banner from "./components/Banner";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Landing />
      <Marquee />
      <Banner
        text1="25th international conference on construction applications of Virtual Reality"
        text2="The intersection of digital transformations and virtual innovation in sustainable and net-zero built environments"
      />
    </div>
  );
}
