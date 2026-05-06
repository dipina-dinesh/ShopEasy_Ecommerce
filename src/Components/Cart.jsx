import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import "./Ecommerce.css";

function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useContext(CartContext);

  // ✅ Calculate total price safely
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 ? (
        <h4 className="empty-cart">Your cart is empty</h4>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                
                <div className="cart-img">
                  <img
                    src={item.image || "https://via.placeholder.com/200"}
                    alt={item.name}
                  />
                </div>

                <h5 className="cart-name">{item.name}</h5>
                <p className="cart-category">{item.category}</p>
                <p className="cart-price">₹ {item.price}</p>

                {/* ✅ Quantity Controls */}
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                {/* ✅ Remove Button */}
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* ✅ Total Price */}
          <h3 className="cart-total">Total: ₹ {totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;