import React from 'react';

const MenuItem = ({ item, onAdd }) => (
  <div className="menu-item">
    <h3>{item.name}</h3>
    <p>₹{item.price}</p>
    <button onClick={() => onAdd(item)}>Add to Cart</button>
  </div>
);

export default MenuItem;
