import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(
        "https://gentle-chamber-62295.herokuapp.com/products"
      );
      if (!data.success) return toast.error(data.error);
      setProducts(data.data);
    };
    getProducts();
  }, [products]);
  return [products, setProducts];
};
export default useProducts;
