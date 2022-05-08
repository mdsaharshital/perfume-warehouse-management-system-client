import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import ProductCards from "../ProductCards/ProductCards";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const [, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="hero-container">
      <div className="banner">
        <div className="banner-content flex justify-center items-center h-100">
          <div className="">
            <h1 className=" text-white testi-title">Perfume Warehouse</h1>
            <button
              onClick={() => navigate("/manage")}
              className="mx-auto d-block btn hero-btn"
            >
              Manage Now
            </button>
          </div>
        </div>
      </div>
      <ProductCards />
    </div>
  );
};

export default Hero;
