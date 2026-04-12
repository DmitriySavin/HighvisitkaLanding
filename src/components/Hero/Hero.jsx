import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero} id="hero">
      <h2 className={styles.title}>Soczysty kebab każdego dnia</h2>
      <p className={styles.description}>
        Świeże składniki, szybka obsługa i smak, który sprawia, że ​​chcesz tu
        wrócić
      </p>
      <Link to="/" className={styles.btn}>
        Zamów już
      </Link>
    </div>
  );
};

export default Hero;
