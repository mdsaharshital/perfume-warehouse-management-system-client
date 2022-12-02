import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const { pathname } = useParams();
  useEffect(() => {
    fetch(`https://perfume-warehouse-backend.up.railway.app/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, [pathname]);
  return [products, setProducts];
};
export default useProducts;
