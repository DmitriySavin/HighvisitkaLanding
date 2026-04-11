import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.sectionAbout}>
      <h2 className={styles.title}>О нас</h2>
      <div className={styles.about}>
        <img
          src="https://images.unsplash.com/photo-1555992336-03a23c7b20ee"
          className={styles.image}
          alt="О нас"
        />

        <div>
          <p>
            Мы — команда, которая любит вкусную еду и делает её каждый день. Наш
            кебаб готовится по проверенным рецептам и подается максимально
            быстро.
          </p>
          <br />
          <p>Нас выбирают за качество, вкус и атмосферу.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
