import { useState } from "react";
import { SlBasket } from "react-icons/sl";
import styles from "./Basket.module.css";
import { useCart } from "../CardContext/CardContext";
import { FaTimes } from "react-icons/fa";

const Basket = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeCart = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 250);
  };

  const { cart, addToCart, removeOne, removeItem, clearCart } = useCart();

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  const totalPrice = cart.reduce((sum, i) => sum + i.qty * Number(i.price), 0);

  return (
    <>
      {/* FLOAT BUTTON */}
      <button className={styles.basket} onClick={() => setIsOpen(true)}>
        <SlBasket size={28} color="black" />
        {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
      </button>

      {/* MODAL */}
      {(isOpen || isClosing) && (
        <div className={styles.overlay} onClick={closeCart}>
          <div
            className={`${styles.modal} ${isClosing ? styles.closing : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.basket} onClick={() => setIsOpen(false)}>
              <FaTimes size={26} />
            </button>

            <h2 className={styles.title}>Twój koszyk</h2>

            {cart.length === 0 ? (
              <p className={styles.titleClear}>Koszyk pusty</p>
            ) : (
              <>
                <ul>
                  {cart.map((item) => (
                    <li key={item.title} className={styles.item}>
                      <div>
                        <strong className={styles.title}>{item.title}</strong>
                        <p className={styles.desc}>
                          {item.qty} x {item.price} zł
                        </p>
                      </div>

                      <div className={styles.actions}>
                        <button onClick={() => removeOne(item.title)}>-</button>

                        <button onClick={() => addToCart(item)}>+</button>

                        <button onClick={() => removeItem(item.title)}>
                          ✕
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className={styles.footer}>
                  <h3 className={styles.totalPrice}>Razem: {totalPrice} zł</h3>

                  <button onClick={clearCart} className={styles.clearBtn}>
                    Wyczyść
                  </button>

                  <a
                    className={styles.checkoutBtn}
                    href="https://m.me/dimafrontendweb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zamów teraz
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Basket;
