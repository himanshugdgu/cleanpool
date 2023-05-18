import React from "react";
import pool1 from "../assets/pool1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <img className="pool1" src={pool1} alt="pool" />
      <div className="changing-text position-absolute  translate-middle ">
        <h1 className="text-center text-white ">Swimming Pool</h1>
        <h3 className="text-center text-white mt-4">
          Book your Cleaning Service Now
        </h3>
      </div>
      <Link to="/cleanpool/home">
        <button
          type="button"
          className="btn btn-primary btn-lg mt-5
        position-absolute top-50 start-50 translate-middle
        shadow-lg
      "
        >
          Explore Services
        </button>
      </Link>
    </div>
  );
};

export default Hero;
