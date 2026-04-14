import styles from "./Gallery.module.css";
import { useEffect, useRef, useState } from "react";

const Gallery = () => {
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

  return (
    <section
      ref={ref}
      id="gallery"
      className={`${styles.sectionGallery} ${visible ? styles.visible : ""}`}
    >
      <h2 className={styles.title}>Галерея</h2>
      <ul className={styles.gallery}>
        <li className={styles.galleryItem}>
          <img
            className={styles.galleryImage}
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAG9QMQrDm_oAf6BfN7cfCI0blhOwNZeZ4vqCrAby9Y19dHe8ERVo7wEIhE_ZVzyQR0IeDVGRs12tjh8EqXqu4Ld9NwbmP1P8GKvrxKunQJltKsHOwat8pDQYvxs3JSZ-9Aq350_Ag=w112-h112-p-k-no"
          />
        </li>
        <li className={styles.galleryItem}>
          <img
            className={styles.galleryImage}
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHyV58fn36EmciveQRZhiB-K0u-cTIwjm7E-R72tQf3bu8VVpCtRBUe5s7DMmbLuG4U6eGD1vULz_3tAwIkjoogbdKV1QLT88A8_e5At5UyWISgeBmtN_gRU342V9xjp6kMvXjO=w112-h112-p-k-no"
          />
        </li>
        <li className={styles.galleryItem}>
          <img
            className={styles.galleryImage}
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFlb5VtVPI074JI9v0X5fxOWQXv3deuFBO2iM1ApOI53XPPKZPL05hGAPOOsugQ-dWkXlopumVSTNT_w9foTGgAH5Bz7KajYD7TH7F3KphPJ5CIZsky4dqBqgkX75mf1UcinPyl8A=w112-h112-p-k-no"
          />
        </li>
        <li className={styles.galleryItem}>
          <img
            className={styles.galleryImage}
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEOOVL9SUdERunfEOiuEFFpVxdAm55I9TXx0pnkg9sY8IUTWWmE5ZSXyUcv1AshvnH1Jq3ul3_70FaihFIqWX3j4ZoJLRpgj6ytWUlLKbcGb9lc3adF4vHA0Xcr2-y7Ek1ZnVzk=w112-h112-p-k-no"
          />
        </li>
      </ul>
    </section>
  );
};
export default Gallery;
