import React from "react";
import "./ProductCards.css";
import useProducts from "./../../../hooks/useProducts";
import ProductCardDetails from "../ProductCardDetails/ProductCardDetails";

const ProductCards = () => {
  const [products, setProducts] = useProducts();

  return (
    <div className="">
      <h1 className="text-center mt-5 mb-2">Inventory Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products
          .map((product) => (
            <ProductCardDetails key={product._id} product={product} />
          ))
          .slice(0, 6)}
      </div>
    </div>
  );
};

export default ProductCards;
