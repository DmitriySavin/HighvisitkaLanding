import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero} id="hero">
      <h2 className={styles.title}>Сочный кебаб каждый день 🌯</h2>
      <p className={styles.description}>
        Свежие ингредиенты, быстрый сервис и вкус, к которому хочется
        возвращаться
      </p>
      <Link to="/menu" className={styles.btn}>
        Смотреть меню
      </Link>
    </div>
  );
};

export default Hero;
