import { useEffect, useRef, useState } from "react";
import styles from './Features.module.css';

const Features = () => {
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
    <section
      ref={ref}
      className={`${styles.featuresSection} ${
        visible ? styles.visible : ""
      }`}
    >
      <h2 className={styles.title}>Почему выбирают нас</h2>

      <div className={styles.features}>
        {[
          "🔥 Всегда свежее мясо",
          "⚡ Быстрое обслуживание",
          "🌯 Большие порции",
          "💰 Доступные цены"
        ].map((text, i) => (
          <div
            key={i}
            className={`${styles.feature} ${
              visible ? styles.featureVisible : ""
            }`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;