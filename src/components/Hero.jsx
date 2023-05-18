import React from "react";
import pool1 from "../assets/pool1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <img className="pool1" src={pool1} alt="pool" />
      <div className="changing-text position-absolute  translate-middle ">
        <h1 className="text-center text-white  ">Swimming Pool</h1>
        <h3 className="text-center text-white">Book your slot now</h3>
      </div>
      <Link to="/cleanpool/buy">
        <button
          type="button"
          className="btn btn-primary btn-lg mt-5
        position-absolute top-50 start-50 translate-middle
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
