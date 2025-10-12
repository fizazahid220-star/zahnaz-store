"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ load cart from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem("z_cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // ✅ save to localStorage whenever cart updates
  useEffect(() => {
    localStorage.setItem("z_cart", JSON.stringify(cart));
  }, [cart]);

  // 🛒 Add to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item._id === product._id);
      if (existing) {
        alert("⚠️ Already in cart!");
        return prevCart;
      } else {
        alert("✅ Added to cart!");
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // 🗑 Remove Item
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  // 🧹 Clear All
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
