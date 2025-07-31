import React from 'react';

const CartSummary = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-summary">
      <h3>🛒 Cart Summary</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} — ₹{item.price}</li>
        ))}
      </ul>
      <p>Total: ₹{total}</p>
    </div>
  );
};

export default CartSummary;
