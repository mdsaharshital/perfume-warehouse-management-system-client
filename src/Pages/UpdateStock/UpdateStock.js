import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateStock = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    (async () => {
      const { data } = await axios.get(url);
      setProduct(data.data);
    })();
  }, [product]);
  const { name, price, quantity, supplier, description, img } = product;
  // common function to manage quantity
  const manageQuantity = async (newQuantity, id, msg) => {
    const details = { newQuantity, id };
    const url = `http://localhost:5000/products`;
    const { data } = await axios.put(url, details);
    console.log(data);
    if (!data.success) {
      return toast.error(data.error);
    }
    if (msg) {
      return toast.success("Added successfully");
    }
    return toast.success("Delivered successfully");
  };
  // handle delivery
  const handledeliver = async () => {
    let newQuantity = quantity - 1;
    let msg = false;
    manageQuantity(newQuantity, id, msg);
  };
  // handle add quantity from input
  const addQuantity = (e) => {
    e.preventDefault();
    const restockNumber = parseInt(e.target.quantity.value);
    let newQuantity = parseInt(quantity) + restockNumber;
    let msg = true;
    manageQuantity(newQuantity, id, msg);
  };
  return (
    <div className="p-5">
      <h1 className="text-center mb-4">Update Stock of : {name}</h1>

      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={img}
            alt=""
          />
          <div className="flex flex-col justify-between px-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Price: ${price}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Quantity {quantity}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Supplier: {supplier}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <small>{description}</small>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-4">
        <button onClick={handledeliver} className="btn hero-btn me-1">
          Give Delivery
        </button>
        <form onSubmit={addQuantity} className="my-3">
          <input
            type="number"
            name="quantity"
            placeholder="Add product quanity"
            className="py-2 px-2"
            required
          />
          <input type="submit" className="btn hero-btn" value={"Restock"} />
        </form>
      </div>
    </div>
  );
};

export default UpdateStock;