import React from "react";
import pool1 from "../assets/pool1.jpg";
import { Link } from "react-router-dom";
import Typed from "react-typed";

const Home = () => {
  const handleButtonClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* <img className="pool1 " src={pool1} alt="pool" /> */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/1400x600/?pool" alt="" />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/1400x600/?swimming" alt="" />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/1400x600/?water" alt="" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="">
        {/* search bar */}
        <div className="changing-text position-absolute  translate-middle ">
          <Typed
            className="typed-text
            text-center
            text-white
            font-weight-bold
            "
            strings={[
              "Skimmer Net",
              "Pool Brush",
              "Manual Pool Vacuum",
              "Chlorination",
              "Draining and refilling",
              "Robotic cleaners",
              "Pressure-side cleaners",
              "Suction-side cleaners",
              "UV-C light systems",
              "Ozone generators",
              "Chemicals feeders",
            ]}
            typeSpeed={40}
            backSpeed={5}
            loop
          />
          {/* button typed explore */}
          <br />
        </div>
        <div className="explore-button position-absolute translate-middle">
          <Link to="/cleanpool/conventional">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={handleButtonClick}
            >
              Conventional Methods
            </button>
          </Link>
          <Link to="/cleanpool/advance">
            <button
              type="button"
              className="btn btn-primary btn-lg
                ms-5
              "
              onClick={handleButtonClick}
            >
              Modern Methods
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
