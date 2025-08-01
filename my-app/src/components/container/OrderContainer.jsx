import React, { useState } from 'react';
import MenuItem from "../MenuItem/MenuItem";
import CartSummary from "../CartSummary/CartSummary";

const OrderContainer = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const menuItems = [
    { id: 1, name: 'Espresso', price: 120 , image:"/MenuItem/Espresso.jpeg"},
    { id: 2, name: 'Cappuccino', price: 150 ,image:""},
    { id: 3, name: 'Blueberry Muffin', price: 90 ,image:"/MenuItem/Muffin.jpg"},
    { id: 4, name: 'Croissant', price: 100 , image: '/MenuItem/Croissant.jpg' },
  ];

  return (
    <div className="order-container">
      <h2>☕ Welcome to Meteor Café</h2>
      <div className='container text-center p-3'>
      <div className='row text-center justify-content-center align-items-center'>
      <div className="menu-section">
        
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} onAdd={handleAddToCart} />
        ))}
      </div>
      </div>
      </div>
      <CartSummary cart={cart} />
      <button onClick={() => alert('Order placed!')} className="order-button">
        Place Order
      </button>
    </div>
  );
};

export default OrderContainer;
