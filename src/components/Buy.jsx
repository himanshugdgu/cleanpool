import React, { useState } from "react";
import { Link } from "react-router-dom";

const Page = () => {
  const list = [
    "Skimmer Net",
    "Pool Brush",
    "Manual Pool Vacuum",
    "Chlorination",
    "Draining and Refilling",
    "Robotic Cleaners",
    "Pressure-Side Cleaners",
    "Suction-Side Cleaners",
    "UV-C Light Systems",
    "Ozone Generators",
    "Chemical Feeders",
  ];

  const [items, setItems] = useState([
    { id: 1, name: "Skimmer Net", price: 10, taxRate: 0.1, selected: false },
    { id: 2, name: "Pool Brush", price: 20, taxRate: 0.2, selected: false },
    {
      id: 3,
      name: "Manual Pool Vacuum",
      price: 30,
      taxRate: 0.3,
      selected: false,
    },
    { id: 4, name: "Chlorination", price: 40, taxRate: 0.4, selected: false },
    {
      id: 5,
      name: "Draining and Refilling",
      price: 50,
      taxRate: 0.5,
      selected: false,
    },
    {
      id: 6,
      name: "Robotic Cleaners",
      price: 60,
      taxRate: 0.6,
      selected: false,
    },
    {
      id: 7,
      name: "Pressure-Side Cleaners",
      price: 70,
      taxRate: 0.7,
      selected: false,
    },
    {
      id: 8,
      name: "Suction-Side Cleaners",
      price: 80,
      taxRate: 0.8,
      selected: false,
    },
    {
      id: 9,
      name: "UV-C Light Systems",
      price: 90,
      taxRate: 0.9,
      selected: false,
    },
    {
      id: 10,
      name: "Ozone Generators",
      price: 100,
      taxRate: 0.1,
      selected: false,
    },
    {
      id: 11,
      name: "Chemical Feeders",
      price: 110,
      taxRate: 0.2,
      selected: false,
    },
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [squareFootage, setSquareFootage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleItemClick = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, selected: true };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        return { ...i, selected: false };
      } else {
        return i;
      }
    });
    setItems(updatedItems);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (1 + item.taxRate),
    0
  );

  const handlePlaceOrder = () => {
    setShowPopup(true);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSquareFootageChange = (e) => {
    setSquareFootage(e.target.value);
  };

  return (
    <div className="container-2 position-absolute">
      <h1 className="mb-4 text-center">Orders</h1>
      <h2>Items:</h2>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">₹{item.price}</p>
                {!cartItems.find((cartItem) => cartItem.id === item.id) ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button className="btn btn-secondary" disabled>
                    Added to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-4">Cart:</h2>
      {cartItems.length > 0 ? (
        <div className="mb-5">
          <table className="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Tax Rate (GST)</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>₹{item.price.toFixed(2)}</td>
                  <td>{(item.taxRate * 100).toFixed(2)}% (GST)</td>
                  <td>₹{(item.price * (1 + item.taxRate)).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4 className="mt-3">Total Price: ₹{totalPrice.toFixed(2)}</h4>
          <button className="btn btn-success mt-3" onClick={handlePlaceOrder}>
            Buy Now
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}

      {showPopup && (
        <div className="popup d-flex align-items-center justify-content-center border mb-5">
          <div className="popup-content rounded p-4">
            <h2>Order Details:</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ₹{(item.price * (1 + item.taxRate)).toFixed(2)}
                </li>
              ))}
            </ul>
            <div className="mb-3">
              <label htmlFor="squareFootage">Square Footage:</label>
              <input
                type="text"
                id="squareFootage"
                value={squareFootage}
                onChange={handleSquareFootageChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="form-control"
              />
            </div>
            <h3 className="text-center">
              Subtotal: ₹{(totalPrice * squareFootage).toFixed(2)}
            </h3>
            <div className="form-group mb-3">
              <label htmlFor="location">Location:</label>
              <select id="location" className="form-control">
                <option value="">Select Location</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
                <option value="location3">Location 3</option>
              </select>
            </div>
            <button className="btn btn-success mt-3 mx-3">Place Order</button>
            <button
              className="btn btn-secondary mt-3 mx-3"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
