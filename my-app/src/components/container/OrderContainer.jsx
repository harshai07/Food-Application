import React, { useState } from 'react';
import MenuItem from "../MenuItem/MenuItem";
import CartSummary from "../CartSummary/CartSummary";

const OrderContainer = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const menuItems = [
    { id: 1, name: 'Espresso', price: 120 },
    { id: 2, name: 'Cappuccino', price: 150 },
    { id: 3, name: 'Blueberry Muffin', price: 90 },
    { id: 4, name: 'Croissant', price: 100 },
  ];

  return (
    <div className="order-container">
      <h2>☕ Welcome to JavaJoy Café</h2>
      <div className="menu-section">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} onAdd={handleAddToCart} />
        ))}
      </div>
      <CartSummary cart={cart} />
      <button onClick={() => alert('Order placed!')} className="order-button">
        Place Order
      </button>
    </div>
  );
};

export default OrderContainer;
