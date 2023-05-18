import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleBuy = () => {
    // Handle the purchase logic
    // You can implement this functionality based on your needs
  };

  const handleRemove = (productId) => {
    // Remove the product from the cart
    // You can implement this functionality based on your needs
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
};

export default Cart;
