import React from "react";

const Service = () => {
  const methods = [
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
    `Robotic pool cleaners are compact machines equipped with an electric motor and debris catchment that automatically clean the pool. They use suction and brushes to remove dirt and algae, and the debris is stored in a separate container. Robotic cleaners are energy-efficient and reliable, operating with low-voltage motors for extended periods. Their maneuverability allows them to reach tight corners, and advanced models can even learn the pool layout for efficient cleaning. With the ability to clean a regular-sized pool in around 90 minutes, robotic pool cleaners are highly recommended by professionals for their remarkable efficiency compared to other automatic cleaners.`,
    `Experience the ultimate convenience in pool cleaning with our cutting-edge pressure-side pool cleaners. Powered by water pressure, these automated devices effortlessly sweep across your pool, eliminating debris and leaving your water crystal clear. Say goodbye to manual labor and hello to a pristine pool with our advanced pressure-side pool cleaners.`,
    `Suction-side cleaners are automatic pool cleaners that utilize the suction power of the pool's circulation system for effective cleaning. With a head unit, long hose, and filter bag, these cleaners move along the pool's surface, removing debris. They are cost-effective and don't require a separate booster pump, saving on energy costs. However, they rely on the pool's filtration system and may have limitations in picking up larger debris. Popular brands like Hayward and Zodiac offer reliable suction-side cleaners. Enjoy hassle-free pool cleaning with these efficient and budget-friendly devices.`,
    `UV-C light systems for swimming pool cleaners utilize ultraviolet light to effectively eliminate bacteria, viruses, and other microorganisms present in the water. These systems are installed in line with the pool's filtration system, where water passes through a chamber housing a UV-C lamp. The UV-C light disrupts the DNA of microorganisms, resulting in their destruction. UV-C light systems significantly reduce the reliance on chlorine, as they can eliminate up to 99.9% of harmful bacteria and viruses. They offer a chemical-free alternative, particularly beneficial for individuals with sensitive skin or allergies. However, UV-C light systems complement traditional pool maintenance practices and do not replace regular cleaning and chemical balance. Popular brands include Delta UV and Ultraviolet Pool Systems.`,
    `Ozone generators are powerful devices that produce ozone gas to sanitize and clean swimming pool water. They can be either corona discharge or UV light generators, converting oxygen into ozone through plasma or ultraviolet light. Ozone effectively eliminates contaminants like bacteria and viruses without leaving harmful byproducts. It reduces the reliance on chlorine and other chemicals while maintaining clean and clear pool water. However, regular pool maintenance practices such as filtration and water chemistry testing should still be followed alongside ozone generator usage.`,
    `Chemical feeders, including chlorine and bromine feeders, play a vital role in cleaning and sanitizing swimming pools. These automated systems dispense chemicals regularly, effectively eliminating harmful microorganisms and maintaining clean and clear water. Chemical feeders can be offline or inline, powered by electricity or water flow. They are categorized into chlorine feeders, bromine feeders, and mineral feeders, each serving a specific purpose in maintaining proper sanitizer and pH levels. Regular monitoring and testing of the pool water are essential to ensure safe and inviting swimming conditions. Popular brands include Pentair and Hayward.`,
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

  return (
    <div className="services-component">
      <h1
        className="
        text-center
        mt-5
        "
      >
        Conentional methods
      </h1>
      <div className="container mt-5 mb-5">
        {methods.map((method, index) => (
          <div
            key={index}
            className={`row featurette d-flex justify-content-center align-items-center mt-5
                border py-5 mx-auto  rounded shadow-lg
                
            ${index % 2 === 1 ? "flex-row-reverse " : ""}`}
          >
            <div className="col-md-7">
              <h2
                className="featurette-heading text-shadow-heading
                
                
              "
              >
                {method} <span className="text-muted">{Advantages[index]}</span>
              </h2>
              <p className="lead">{desc[index]}</p>

              <button
                type="button"
                className="btn btn-primary btn-lg shadow-lg"
              >
                Book Now
              </button>
            </div>
            <div className="col-md-3">
              <img
                className="img-fluid rounded shadow"
                // src={`https://source.unsplash.com/500x300/?${method}`}
                src={imgLink[index]}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
