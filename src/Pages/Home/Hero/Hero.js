import React from "react";
import ProductCards from "../ProductCards/ProductCards";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-content flex justify-center items-center h-100">
          <div className="">
            <h1 className=" text-white">Perfume Warehouse</h1>
            <button className="mx-auto d-block btn hero-btn">Manage Now</button>
          </div>
        </div>
      </div>
      <ProductCards />
    </div>
  );
};

export default Hero;
