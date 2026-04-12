import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.2 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const dishes = [
    {
      title: "Klasyka Kebaba",
      desc: "Mięso, warzywa, sos firmowy",
      price: "10 zł",
      img: "https://media.istockphoto.com/id/618550582/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D1%8F%D1%81%D0%BD%D0%BE%D0%B9-%D1%88%D0%B0%D0%BC%D0%BF%D1%83%D1%80-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?b=1&s=612x612&w=0&k=20&c=ZUqgijS1TgSc0skZfeQtVINTuJpYccm066hxBlCx_bw=",
    },
    {
      title: "Kebab serowy",
      desc: "Mięso, warzywa, sos serowy",
      price: "12 zł",
      img: "https://media.istockphoto.com/id/1408897449/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%B4%D0%B0%D0%BD%D0%B0-%D0%BA%D0%B5%D0%B1%D0%B0%D0%B1-%D0%BF%D0%BE%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D0%B2-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE%D0%B9-%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%BE%D1%87%D0%BD%D0%BE%D0%B9-%D0%B4%D0%BE%D1%81%D0%BA%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BD%D0%B0-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D0%B1%D0%BE%D0%BA%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE.jpg?b=1&s=612x612&w=0&k=20&c=6qoIAsCOGe5-lRr3ZBscbLBKF0iEEvxtbqOGsSsfiR4=",
    },
    {
      title: "Kebab wołowy",
      desc: "Soczysta wołowina, świeże warzywa",
      price: "14 zł",
      img: "https://media.istockphoto.com/id/851493796/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%BC-%D0%BF%D0%BB%D0%B0%D0%BD%D0%BE%D0%BC-%D1%81%D1%8D%D0%BD%D0%B4%D0%B2%D0%B8%D1%87-%D1%81-%D1%88%D0%B0%D1%88%D0%BB%D1%8B%D0%BA%D0%BE%D0%BC.jpg?b=1&s=612x612&w=0&k=20&c=BcGK7B9_8473B-vB_QJ2UZcdlKASrvmeZ5-hbtiQqro=",
    },
    {
      title: "Kebab z kurczakiem",
      desc: "Kurczak, sałata, sos czosnkowy",
      price: "11 zł",
      img: "https://media.istockphoto.com/id/618550582/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D1%8F%D1%81%D0%BD%D0%BE%D0%B9-%D1%88%D0%B0%D0%BC%D0%BF%D1%83%D1%80-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?b=1&s=612x612&w=0&k=20&c=ZUqgijS1TgSc0skZfeQtVINTuJpYccm066hxBlCx_bw=",
    },
    {
      title: "Kebab pikantny 🌶",
      desc: "Ostre mięso, pikantny sos",
      price: "12 zł",
      img: "https://media.istockphoto.com/id/1408897449/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%B4%D0%B0%D0%BD%D0%B0-%D0%BA%D0%B5%D0%B1%D0%B0%D0%B1-%D0%BF%D0%BE%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D0%B2-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE%D0%B9-%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%BE%D1%87%D0%BD%D0%BE%D0%B9-%D0%B4%D0%BE%D1%81%D0%BA%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BD%D0%B0-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D0%B1%D0%BE%D0%BA%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE.jpg?b=1&s=612x612&w=0&k=20&c=6qoIAsCOGe5-lRr3ZBscbLBKF0iEEvxtbqOGsSsfiR4=",
    },
    {
      title: "Durum kebab",
      desc: "Zawijany w cienką tortillę",
      price: "13 zł",
      img: "https://images.pexels.com/photos/18330986/pexels-photo-18330986.jpeg",
    },
    {
      title: "Frytki z sosem",
      desc: "Złociste frytki + sos",
      price: "6 zł",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    },
    {
      title: "Zestaw kebab + napój",
      desc: "Kebab + cola 0.5l",
      price: "15 zł",
      img: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
    },
  ];

  return (
    <section
      ref={ref}
      className={`${styles.topDishes} ${visible ? styles.visible : ""}`}
      id="menu"
    >
      <h2 className={styles.topDishesTitle}>Nasze menu</h2>
      <p className={styles.subtitle}>
        Najpopularniejsze dania wybierane przez naszych klientów 🔥
      </p>
      <ul className={styles.menu}>
        {dishes.map((dish, index) => (
          <li key={index} className={styles.card}>
            <img src={dish.img} alt={dish.title} className={styles.cardImage} />

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{dish.title}</h3>
              <p>{dish.desc}</p>
              <p className={styles.price}>{dish.price}</p>
            </div>
            <button
              className={styles.orderBtn}
              onClick={() =>
                window.open(
                  "https://wa.me/48123456789?text=Chcę zamówić: " + dish.title,
                  "_blank",
                )
              }
            >
              Zamów
            </button>
          </li>
        ))}
      </ul>

      <a
        href="https://images.google.com/?hl=ru"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
      >
        Zobacz pełne menu →
      </a>
    </section>
  );
};

export default TopDishes;
