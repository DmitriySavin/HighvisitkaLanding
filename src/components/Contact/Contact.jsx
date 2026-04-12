import styles from "./Contact.module.css";
import { useRef, useState, useEffect } from 'react';
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
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);


  return (
    <section ref={ref} id="contact" className={`${styles.contact} ${visible ? styles.visible : ""}`}>
      <div className={styles.infoWrapper}>
        <h2 className={styles.sectionTitle}>Контакты</h2>
        <p className={styles.info}>📍 Одесса, центр города</p>
        <p className={styles.info}>📞 +380 00 000 00 00</p>
        <p className={styles.info}>⏰ Ежедневно 10:00 – 22:00</p>
      </div>
      
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327861.6323933133!2d14.136054630394899!3d50.05971419702257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2z0J_RgNCw0LPQsCwg0KfQtdGF0LjRjw!5e0!3m2!1sru!2sua!4v1775860777324!5m2!1sru!2sua"
          allowFullScreen=""
          loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
        ></iframe>
    </section>
  );
};
export default Contact;
