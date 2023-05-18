import React from "react";

const ThankYouPage = () => {
  return (
    <div
      className="container-thanks container position-absolute
    start-50
    translate-middle
    "
    >
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="mt-5" style={{ fontSize: "2.5rem", color: "#333" }}>
            Thank You for Ordering!
          </h1>
          <p
            className="lead"
            style={{ fontSize: "1.5rem", color: "#555", marginTop: "20px" }}
          >
            We will call you soon.
          </p>
          <p
            className="text-muted"
            style={{ fontSize: "1.2rem", color: "#888", marginTop: "10px" }}
          >
            Thanks for your order!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
