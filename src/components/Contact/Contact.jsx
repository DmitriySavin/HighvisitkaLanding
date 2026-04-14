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

    if (ref.current) {
      observer.observe(ref.current);
    }

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
        <p className={styles.info}>⏰ Poniedziałek - Niedziela 11:00 - 21:00</p>
        <p className={styles.info}>
          📍 Chrząstowo 46, Chrzastowo, Poland, 63-130
        </p>
        <p className={styles.info}>📞 +48 578 128 296</p>
        <a
          className={styles.btn}
          href="tel:+"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zadzwoń
        </a>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4905.543886131465!2d17.127520841897827!3d52.065676102507844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47050390dee73527%3A0x69db0075c90cebe6!2zQ2hyesSFc3Rvd28gNDYsIDYzLTEzMCBDaHJ6xIVzdG93bywg0J_QvtC70YzRiNCw!5e0!3m2!1sru!2sua!4v1776180789834!5m2!1sru!2sua"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
      ></iframe>
    </section>
  );
};
export default Contact;
