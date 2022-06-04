import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://gentle-chamber-62295.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);
  return [products, setProducts];
};
export default useProducts;
