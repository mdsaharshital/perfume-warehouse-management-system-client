import React from "react";
import "./ProductCards.css";
import card1 from "../../../images/fernando-andrade-potCPE_Cw8A-unsplash (1).jpg";

const ProductCards = () => {
  return (
    <div>
      <div class="thecard">
        <div class="thefront">
          <img src={card1} alt="" />
        </div>

        <div class="theback">
          <h1>Back of Card</h1>
          <p>
            Your use of this site is subject to the terms and conditions
            governing this and all transactions.
          </p>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
