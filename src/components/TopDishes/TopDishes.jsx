import { useEffect, useRef, useState } from "react";
import { useCart } from "../CardContext/CardContext";
import styles from "./TopDishes.module.css";
import Basket from "../Basket/Basket";

const TopDishes = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const [activeCategory, setActiveCategory] = useState("🍔 Burgers");
  const { addToCart } = useCart();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const menuData = [
    {
      category: "🍔 Burgers",
      items: [
        {
          id: 1,
          title: "Classic Burger",
          price: 25,
          img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
        },
        {
          id: 2,
          title: "Cheese Burger",
          price: 28,
          img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
        },
        {
          id: 3,
          title: "Double Bacon Burger",
          price: 32,
          img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400",
        },
      ],
    },
    {
      category: "🌯 Kebab",
      items: [
        {
          id: 4,
          title: "Chicken Kebab",
          price: 22,
          img: "data:image/jpeg;base64,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",
        },
        {
          id: 5,
          title: "Beef Kebab",
          price: 24,
          img: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=400",
        },
        {
          id: 6,
          title: "Kebab Box",
          price: 27,
          img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400",
        },
      ],
    },
    {
      category: "🍕 Pizza",
      items: [
        {
          id: 7,
          title: "Margherita",
          price: 30,
          img: "https://source.unsplash.com/400x300/?pizza",
        },
        {
          id: 8,
          title: "Pepperoni",
          price: 34,
          img: "https://source.unsplash.com/400x300/?pepperoni-pizza",
        },
      ],
    },
    {
      category: "🥤 Drinks",
      items: [
        {
          id: 9,
          title: "Coca Cola",
          price: 8,
          img: "https://source.unsplash.com/400x300/?cola",
        },
        {
          id: 10,
          title: "Orange Juice",
          price: 10,
          img: "https://source.unsplash.com/400x300/?orange-juice",
        },
      ],
    },
    {
      category: "🍟 Sides",
      items: [
        {
          id: 11,
          title: "French Fries",
          price: 12,
          img: "https://source.unsplash.com/400x300/?fries",
        },
        {
          id: 12,
          title: "Nuggets",
          price: 18,
          img: "https://source.unsplash.com/400x300/?chicken-nuggets",
        },
      ],
    },
  ];

  const activeMenu = menuData.find(
    (cat) => cat.category === activeCategory
  );

  return (
    <>
      <section
        ref={ref}
        className={`${styles.topDishes} ${visible ? styles.visible : ""}`}
        id="menu"
      >
        <div className={styles.container}>
          <h2 className={styles.topDishesTitle}>Nasze menu</h2>

          {/* TABS */}
          <div className={styles.tabs}>
            {menuData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={
                  activeCategory === cat.category ? styles.active : ""
                }
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* LIST */}
          <ul className={styles.grid}>
            {activeMenu?.items.map((item) => (
              <li key={item.id} className={styles.card}>
                <img src={item.img} alt={item.title} />

                <div className={styles.info}>
                  <h3>{item.title}</h3>
                  <p>{item.price} zł</p>

                  <button onClick={() => addToCart(item)}>
                    Dodaj
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Basket />
    </>
  );
};

export default TopDishes;