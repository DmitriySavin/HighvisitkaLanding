import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero} id="hero">
      <h2 className={styles.title}>Soczysty kebab każdego dnia</h2>
      <p className={styles.description}>
        Najlepszy kebab w Twoim mieście 🌯🔥 Świeże składniki • duże porcje •
        szybka obsługa Zamów online w kilka sekund ↓
      </p>
      <a
        className={styles.btn}
        href="https://m.me/dimafrontendweb"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zamów teraz
      </a>
    </div>
  );
};

export default Hero;
