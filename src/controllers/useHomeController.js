import { useState } from "react";
import { message } from "antd";
import { modules } from "../data/modules";

export default function useHomeController() {
  const [cart, setCart] = useState([]);
  const [minPriceFilter, setMinPriceFilter] = useState(null);
  const [maxPriceFilter, setMaxPriceFilter] = useState(null);

  const handleAddToCart = (item) => {
    setCart(prev => [...prev, item]);
    message.success(`${item.title} agregado al carrito`);
  };

  const handleRemoveFromCart = (index) => {
    setCart(prev => {
      const newCart = [...prev];
      const removed = newCart.splice(index, 1);
      message.warning(`${removed[0].title} eliminado del carrito`);
      return newCart;
    });
  };

  const handleCheckout = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message.success(`✅ Compra finalizada. Total: $${total.toLocaleString()}`);
    setCart([]);
  };

  const filterByPrice = (items) => {
    return items.filter(item => {
      if (minPriceFilter !== null && item.price < minPriceFilter) return false;
      if (maxPriceFilter !== null && item.price > maxPriceFilter) return false;
      return true;
    });
  };

  const setFilters = (min, max) => {
    setMinPriceFilter(min);
    setMaxPriceFilter(max);
  };

  const clearFilters = () => {
    setMinPriceFilter(null);
    setMaxPriceFilter(null);
  };

  return {
    cart,
    modules,
    handleAddToCart,
    handleRemoveFromCart,
    handleCheckout,
    filterByPrice,
    setFilters,
    clearFilters,
    minPriceFilter,
    maxPriceFilter,
  };
}
