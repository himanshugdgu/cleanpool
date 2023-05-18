import React from "react";
import pool1 from "../assets/pool1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <img className="pool1" src={pool1} alt="pool" />

      <Link to="/buy">
        <button
          type="button"
          className="btn btn-primary btn-lg 
        
        position-absolute top-50 start-50 translate-middle
        // dark shadow
        shadow-lg
      "
        >
          Book Now
        </button>
      </Link>
    </div>
  );
};

export default Hero;
