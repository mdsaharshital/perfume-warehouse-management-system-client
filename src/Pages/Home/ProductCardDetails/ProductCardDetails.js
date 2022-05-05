import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCardDetails.css";

const ProductCardDetails = ({ product }) => {
  const { _id, name, price, quantity, supplier, description, img } = product;
  const navigate = useNavigate();
  return (
    <div className="mx-auto my-3">
      <div class=" thecard">
        <div class="thefront">
          <img src={img} alt="" />
        </div>

        <div class="theback">
          <h3>{name}</h3>
          <p>Price: {price}</p>
          <p>Supplier : {supplier}</p>
          <p>Quantity: {quantity}</p>
          <p>
            <small>{description}</small>
          </p>
          <button
            onClick={() => navigate(`/inventory/${_id}`)}
            className="btn hero-btn"
          >
            Stock update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
