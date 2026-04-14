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
      title: "Kebab tortillakebab tortilla ",
      desc: "Mięso, warzywa, sos firmowy",
      price: "10 zł",
      img: "https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/516842800_122245421708204762_3275334229520715672_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=MDYnkw_y9zAQ7kNvwHhfNrv&_nc_oc=Adoggo8eIK6me2WA3hygtnF03CUMt7w33LB7hrF3ONY887BrntoNnGvjfuk4bo7BWFU&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=bVt1iMNeTyIA4r7bPyWZqQ&_nc_ss=7a3a8&oh=00_Af1mVjPdnSuWveeBAwm_WvUGoCEXTC_kGkdSnKnNaxnFEw&oe=69E4479A",
    },
    {
      title: "Kebab w bułce",
      desc: "Mięso, warzywa, sos serowy",
      price: "12 zł",
      img: "https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/475665887_122208693566204762_7579733299161274339_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=VerYaRheHc0Q7kNvwE58dPx&_nc_oc=AdrnyDyec5rYWRCX059LiWeGIXypNBj6-Nrf_Pi5KReJKRgEckAWzYCe_M5pvYp_zTA&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=Bg_PYOa4vlXflbcrvKgmJg&_nc_ss=7a3a8&oh=00_Af2y9m2Be9X93P4uYFnnfZtFHdJWtWWmY5XtX4MJkcHsGg&oe=69E43147",
    },
    {
      title: "Kebab box",
      desc: "Soczysta wołowina, świeże warzywa",
      price: "14 zł",
      img: "https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/480606432_122212451120204762_3509859716214752638_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=3Jk2-HJUk34Q7kNvwHgsWsf&_nc_oc=AdrlTtiXR2Qs1agbep8XIgCJNm99por9smXp1ByRn6QFzM2vp1mxXkpJZouA6RhbaIw&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=cbdzdlkboJUM7a6szUR2-w&_nc_ss=7a3a8&oh=00_Af13kPfjKAXrl3F0pbys08XZtVwEzO2h4p1HTBnouOFK1w&oe=69E42598",
    },
    {
      title: "frytki",
      desc: "Kurczak, sałata, sos czosnkowy",
      price: "11 zł",
      img: "https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/476454755_122209613702204762_2691764354575691376_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ArE39PHOxzIQ7kNvwEDYZLB&_nc_oc=AdqdmJNEnJzRhcDPCfx9mt5zLkn9TzPm2xgixX8WbwuVtWy2Zhq1xcFJT99L7Vf0N-g&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=T36j1McRg37G10T0YEox0A&_nc_ss=7a3a8&oh=00_Af2OYoXK9OvqRfHoyG6RmZ0XBCSyf06VUfa1oIZVoJbp_Q&oe=69E44B12",
    },
    {
      title: "zestawy",
      desc: "Ostre mięso, pikantny sos",
      price: "12 zł",
      img: "https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/572233290_122265355634204762_5089117927265037728_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=PV2sBP8c7GYQ7kNvwHhD7cw&_nc_oc=Adp1-Nz4Rl8RXf_VI2XEA1E_9m0AdoDc5A6YQw8wUtZun72yGaDR0CdzzBeacFQARY8&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=qwTFbLBx2YicXc1eKxd8bA&_nc_ss=7a3a8&oh=00_Af0ghlOvO0z4xcW29UZtbvF54b3uDKNRs42AZ3rxgxoCxA&oe=69E4501A",
    },
    {
      title: "napoje",
      desc: "Zawijany w cienką tortillę",
      price: "13 zł",
      img: "https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/489283297_122224959914204762_259933967139335953_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=T3zAgj5baawQ7kNvwGLLm0h&_nc_oc=AdoNBjO-KZUce_YIQc7kNoW-TWabGMja3fPPz4McpSrHdHjtrY4JUnzPd348d0t8WpQ&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=2pNyulr4zA_N7HlKUWbrGA&_nc_ss=7a3a8&oh=00_Af1hK6q-skga06kC3J9j-qpaWiQ26CbaQv1seSdfHZOAlA&oe=69E42A7E",
    },
    {
      title: "Frytki z sosem",
      desc: "Złociste frytki + sos",
      price: "6 zł",
      img: "https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/486560703_122222949194204762_7578518046823101187_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=vBMOp9uV8roQ7kNvwFwE7Hw&_nc_oc=AdpPkOYyZrj-zJbvk75NGTUXtfBNnbToZ0Zd6Ky7cbqlc4gAd5B4AMKvH7x-ag-Ogm8&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=4_5R7-ceJiNXghmL3PGz0g&_nc_ss=7a3a8&oh=00_Af0ZE8PFwmzftuew8AePMRhDDwRfby5zFyJMnbquUmNuFQ&oe=69E44915",
    },
    {
      title: "Zestaw kebab + napój",
      desc: "Kebab + cola 0.5l",
      price: "15 zł",
      img: "https://scontent.fods8-1.fna.fbcdn.net/v/t39.30808-6/489283297_122224959914204762_259933967139335953_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=T3zAgj5baawQ7kNvwGLLm0h&_nc_oc=AdoNBjO-KZUce_YIQc7kNoW-TWabGMja3fPPz4McpSrHdHjtrY4JUnzPd348d0t8WpQ&_nc_zt=23&_nc_ht=scontent.fods8-1.fna&_nc_gid=2pNyulr4zA_N7HlKUWbrGA&_nc_ss=7a3a8&oh=00_Af1hK6q-skga06kC3J9j-qpaWiQ26CbaQv1seSdfHZOAlA&oe=69E42A7E",
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
