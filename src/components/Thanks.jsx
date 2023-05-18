import React from "react";

const ThankYouPage = () => {
  return (
    <>
      <img
      className="background-img"
        src="https://media.istockphoto.com/id/1333173353/photo/yellow-shine-background-summer-beam-and-empty-blank-space-backdrop-design-on-vivid-bright.jpg?b=1&s=612x612&w=0&k=20&c=E9ZG46e4sOlAOvPuXVigsMKWj669CO8n3-nIeomoWEw="
        alt=""
      />

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
    </>
  );
};

export default ThankYouPage;
