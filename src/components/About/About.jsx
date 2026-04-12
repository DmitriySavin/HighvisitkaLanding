import styles from "./About.module.css";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.2 }
    );
    observer.observe(ref.current);

    return () => observer.disconnect()
  }, []);

  return (
    <section ref={ref} id="about" className={`${styles.sectionAbout} ${visible ? styles.visible : ""}`}>
      <h2 className={styles.title}>О нас</h2>
      <div className={styles.about}>
        <img
          src="https://images.unsplash.com/photo-1555992336-03a23c7b20ee"
          className={styles.image}
          alt="О нас"
        />

        <div>
          <p>
           Jesteśmy zespołem, który kocha pyszne jedzenie i przygotowuje je każdego dnia. Nasze kebaby są przygotowywane według sprawdzonych receptur i podawane najszybciej, jak to możliwe.
          </p>
          <br />
          <p>Zostaliśmy wybrani ze względu na jakość, smak i atmosferę.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
