import styles from "./Modal.module.css";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";

const Modal = ({ closeModal }) => {
  return (
    <div className={styles.modal}>
      <button
        type="button"
        className={styles.closeBtn}
        onClick={() => closeModal(false)}
      >
        <FaTimes size={20} color="white" />
      </button>
      {/* <Link to="hero" smooth={true} duration={500} className={styles.link}>
        <h1 className={styles.title}>Kebab House</h1>
      </Link> */}

      <nav className={styles.navigation}>
        <Link to="menu" smooth={true} duration={500} className={styles.link}>
          Najlepsze dania
        </Link>
        <Link to="about" smooth={true} duration={500} className={styles.link}>
          O nas
        </Link>
        <Link to="gallery" smooth={true} duration={500} className={styles.link}>
          Galeria
        </Link>
        <Link to="contact" smooth={true} duration={500} className={styles.link}>
          Łączność
        </Link>
      </nav>
    </div>
  );
};

export default Modal;
