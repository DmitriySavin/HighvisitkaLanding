import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (dish) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.title === dish.title);

      if (exists) {
        return prev.map((item) =>
          item.title === dish.title ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      return [...prev, { ...dish, qty: 1 }];
    });
  };

  const removeOne = (title) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.title === title ? { ...item, qty: item.qty - 1 } : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const removeItem = (title) => {
    setCart((prev) => prev.filter((item) => item.title !== title));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeOne, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
