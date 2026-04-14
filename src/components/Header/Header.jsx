import { Link } from "react-scroll";
import styles from "./Header.module.css";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";
import Modal from "../../modals/Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = (close) => {
    setIsOpen(close);
  };

  return (
    <header className={styles.header}>
      <Link to="hero" smooth={true} duration={500} className={styles.link}>
        <h1 className={styles.title}>🔥 Bafra Kebab Chrząstowo</h1>
      </Link>
      {isOpen && <Modal closeModal={closeModal} />}

      <nav className={styles.navigation}>
        <Link to="menu" smooth={true} duration={500} className={styles.link}>
         Menu
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
      <button type="button" className={styles.burger} onClick={openModal}>
        <FaAlignJustify size={20} color="white" />
      </button>
    </header>
  );
};

export default Header;
