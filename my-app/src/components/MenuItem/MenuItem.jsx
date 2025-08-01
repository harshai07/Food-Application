import React from 'react';

const MenuItem = ({ item, onAdd }) => (
  <div className="menu-item">
    <img src={item.image} alt={item.name} className="menu-image" />
    <h3>{item.name}</h3>
    <p>₹{item.price}</p>
    <button className="cart-button" onClick={() => onAdd(item)}>Add to Cart</button>
  </div>
);

export default MenuItem;
