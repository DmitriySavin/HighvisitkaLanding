import styles from "./Contact.module.css";
import { useRef, useState, useEffect } from "react";
const Contact = () => {
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

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="contact"
      className={`${styles.contact} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.infoWrapper}>
        <h2 className={styles.sectionTitle}>Łączność</h2>
        <p className={styles.info}>📍 Poland, Centrum Warszawy</p>
        <p className={styles.info}>📞 +48 00 000 00 00</p>
        <p className={styles.info}>⏰ Codziennie 10:00 – 22:00</p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312784.5799193035!2d20.470702399631993!3d52.2319482149008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2z0JLQsNGA0YjQsNCy0LAsINCf0L7Qu9GM0YjQsA!5e0!3m2!1sru!2sua!4v1776008100220!5m2!1sru!2sua"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
      ></iframe>
    </section>
  );
};
export default Contact;
