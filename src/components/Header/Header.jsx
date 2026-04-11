import { Link } from "react-scroll";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="hero" smooth={true} duration={500} className={styles.link}>
        <h1 className={styles.title}>🔥 Kebab House</h1>
      </Link>
      <nav className={styles.navigation}>
        <Link to="menu" smooth={true} duration={500} className={styles.link}>
          Меню
        </Link>
        <Link to="about" smooth={true} duration={500} className={styles.link}>
          О нас
        </Link>
        <Link to="gallery" smooth={true} duration={500} className={styles.link}>
          Галерея
        </Link>
        <Link to="contact" smooth={true} duration={500} className={styles.link}>
          Контакты
        </Link>
      </nav>
    </header>
  );
};

export default Header;