import { useEffect, useRef , useState} from "react";


import styles from "./TopDishes.module.css";

const TopDishes = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);


  return (
    <section ref={ref} className={`${styles.topDishes} ${visible ? styles.visible : ""}`} id="menu">
      <h2 className={styles.topDishesTitle}>Top dishes</h2>
      <ul className={styles.menu}>
        <li className={styles.card}>
          <h3 className={styles.cardTitle}>Кебаб классический</h3>
          <p>Мясо, овощи, фирменный соус</p>
          <p className={styles.price}>120 грн</p>
        </li>
        <li className={styles.card}>
          <h3 className={styles.cardTitle}>Кебаб сырный</h3>
          <p>Сыр + двойное мясо</p>
          <p className={styles.price}>140 грн</p>
        </li>
        <li className={styles.card}>
          <h3 className={styles.cardTitle}>Фалафель</h3>
          <p>Вегетарианский вариант</p>
          <p className={styles.price}>100 грн</p>
        </li>
        <li className={styles.card}>
          <h3 className={styles.cardTitle}>Картофель фри</h3>
          <p>Хрустящий гарнир</p>
          <p className={styles.price}>60 грн</p>
        </li>
      </ul>
    </section>
  );
};

export default TopDishes;
