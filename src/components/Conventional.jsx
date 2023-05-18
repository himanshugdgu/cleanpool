import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";

export const CartContext = createContext();

const Conventional = () => {
  const [cartItems, setCartItems] = useState([]);

  const methods = [
    "Skimmer Net",
    "Pool Brush",
    "Manual Pool Vacuum",
    "Chlorination",
    "Draining and refilling",
  ];

  const desc = [
    "This is one of the most common tools used for the cleaning of swimming pools. This tool, available as a flat skimmer or a bag skimmer, have a telescopic pole attached to a skimmer net that allows to collect debris like leaves, bugs, twigs, hair ties etc. that is accumulated onand below the water surface.",
    `Pool brush attached to telescopic pole is used to scrub the pool’s walls and floor, removing
    dirt, and detaching algae before it can really take hold and grow. Based on the type of lining
    on walls and floor of swimming pool different types of brush can be used as given below 
    Unpainted Concrete: brush with both stainless steel and nylon bristles.
    Gunite: Use a brush with stainless steel bristles.
    Fiberglass, Vinyl, or Painted Concrete: Use a brush with nylon bristles only.
    `,
    `Along with filtration system, manually vacuuming of the pool is required to enhance the pool
    life. In this process after brushing the pool to dislodge all the debris, algae and gunk,
    a vacuum head is attached to the telescoping pole and then hose is inserted into the skimmer
    that is further attached to a vacuum pump, which vacuums out the dirt, algae etc. collected on
    pool floor`,
    `Used to kill germs and prevent waterborne diseases. It provides residual protection and is more effective than ozone and UV methods. According to CDC recommendations, maintaining pH levels between 7.2 and 7.8 and a minimum free chlorine concentration of 1 ppm in pools (3 ppm in hot tubs/spas) is essential. Different pathogens require specific concentrations and exposure times to be effectively eliminated. Adhering to these guidelines promotes a safer swimming environment and reduces the risk of waterborne illnesses.
    `,
    `On average, pools are required to be drained and refilled every 5-7 years or if there is a major
    damage due to chock full of chunky chunks of algae, floating debris, and dead animal or if
    there is no other alternative available to repair/maintain the pool.`,
  ];
  const Advantages = [""];

  const imgLink = [
    `https://img.hunkercdn.com/375/cme-data/getty%2Fb6d52d79b80548acb4d8a4ce9e1ffbea.jpg`,
    `https://media.istockphoto.com/id/1155542631/photo/brush-for-cleaning-the-pool-on-the-side-of-the-pool.jpg?s=612x612&w=0&k=20&c=bUi85YDnooCO20M5ZjftKODmcn5dOzw4wWZqJ-nDYTE=`,
    `https://www.poolcalculator.com/wp-content/uploads/2022/05/shutterstock_39603283-scaled.jpg`,
    `https://zeve.au/poolco/uploads/2022/08/adding-chlorine-to-the-pool.jpg`,
    `https://cdn.cleanup.expert/wp-content/uploads/2019/08/pool-water-refill-1.jpg`,
    `https://i.pcmag.com/imagery/roundup-groups/04Yp1anlJOFAZs04UNYmCKS-1.fit_lim.size_1050x.jpg`,
    `https://mikethepoolman.com/wp-content/uploads/2017/03/Polaris-280-1.jpg`,
    `https://www.cliffspools.com/wp-content/uploads/2018/10/Dorado-banner.png`,
    `https://poolshopsamui.com/wp-content/uploads/2020/03/show46.jpg`,
    `https://housegrail.com/wp-content/uploads/2021/10/ozonator.jpg`,
    `https://downtownpools.com/wp-content/uploads/2019/12/pool-chlorinators.jpg`,
  ];

  const addToCart = (method) => {
    const updatedCart = [...cartItems];
    updatedCart.push(method);
    setCartItems(updatedCart);
  };

  return (
    <>
      <img
      className="background-img"
        src="https://images.squarespace-cdn.com/content/v1/535c86cfe4b05fe61b32a91f/1656432745528-QAIWF15BMTN0IBK8JTTS/CC+Pool.jpg"
        alt=""
      />
      <div className="services-component">
        <h1
          className="text-center mt-5 heading
      text-white"
        >
          Conventional methods
        </h1>
        <div className="container mt-5 mb-5">
          {methods.map((method, index) => (
            <div
              key={index}
              className={`row featurette d-flex justify-content-center align-items-center mt-5
              tiles
                border py-5 mx-auto  rounded shadow-lg
                ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
            >
              <div className="col-md-7">
                <h2 className="featurette-heading text-shadow-heading">
                  {method}{" "}
                  <span className="text-muted">{Advantages[index]}</span>
                </h2>
                <p className="lead">{desc[index]}</p>
                <Link to="/cleanpool/buy">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg shadow-lg"
                    onClick={() => addToCart(method)}
                  >
                    Book Now
                  </button>
                </Link>
              </div>
              <div className="col-md-3">
                <img
                  className="img-fluid rounded shadow"
                  src={imgLink[index]}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Conventional;
