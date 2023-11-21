import "./Cart.css";
const Cart = ({ cartItems, onRemoveFromCart, handleCheckout }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.map((cartItem) => (
        <div className="cart-item" key={cartItem.id}>
          <p>{cartItem.name}</p>
          <img
            className="cart-image"
            src={cartItem.image}
            alt={cartItem.name}
          />
          <p>Quantity: {cartItem.quantity}</p>
          <button onClick={() => onRemoveFromCart(cartItem.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
      {cartItems.length > 0 && (
        <button className="checkout" onClick={() => handleCheckout(cartItems)}>
          Buy
        </button>
      )}
    </div>
  );
};

export default Cart;
