


const CartSummary = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };


  return (
    <div className="cart-summary">
      <h3>🛒 Cart Summary</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} — ₹{item.price}
          <button className="remove-btn" onClick={() => removeItem(index)}>✖</button>
          </li>
        ))}
      </ul>
      <p>Total: ₹{total}</p>
      <button onClick={() => alert('Order placed!')} className="order-button">
        Place Order
      </button>
    </div>
  );
};

export default CartSummary;
