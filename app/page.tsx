import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Contact from "./components/Contact";
import ImgTextBanner from "./components/ImgTextBanner";
import Landing from "./components/Landing";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Landing />
      <Banner
        text1="25th international conference on construction applications of Virtual Reality"
        text2="Bridging Global Disparities: Harnessing Digital Technology for Equitable and Net-Zero Development"
      />
      <Banner2 title1="Why participate in this event?" />
      <ImgTextBanner />
      <Contact />
    </div>
  );
}
