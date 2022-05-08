import React from "react";
import "./ProductCards.css";
import useProducts from "./../../../hooks/useProducts";
import ProductCardDetails from "../ProductCardDetails/ProductCardDetails";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const ProductCards = () => {
  const [products] = useProducts();
  const navigate = useNavigate();
  const [, loading] = useAuthState(auth);
  if (loading || !products) {
    return <Loading />;
  }

  return (
    <div className="">
      <h1 className="text-center mt-5 mb-2 testi-title">Inventory Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products
          .map((product) => (
            <ProductCardDetails key={product._id} product={product} />
          ))
          .slice(0, 6)}
      </div>
      <button
        onClick={() => navigate("/manage")}
        className="btn hero-btn d-block mx-auto my-3"
      >
        Manage inventories
      </button>
    </div>
  );
};

export default ProductCards;
