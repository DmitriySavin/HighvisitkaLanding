import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero} id="hero">
      <h2 className={styles.title}>Bafra Kebab Chrząstowo</h2>
      <p className={styles.description}>
        Świeży kebab • szybkie zamówienia • lokalnie i smacznie
      </p>
      <a
        className={styles.btn}
        href="https://m.me/dimafrontendweb"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zamów teraz
      </a>
      <a
        className={styles.btn}
        href="tel: +480000"
      >
        Zadzwoń
      </a>
    </div>
  );
};

export default Hero;
