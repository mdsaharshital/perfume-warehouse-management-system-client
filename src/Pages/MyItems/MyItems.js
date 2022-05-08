import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import ManageAllitemsTable from "../ManageAllitemsTable/ManageAllitemsTable";
import Loading from "../Shared/Loading/Loading";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MyItems = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          `https://gentle-chamber-62295.herokuapp.com/myitems/${user.email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        if (!data.success) return toast.error(data.error);
        setMyProducts(data.data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          toast.error("forbidden access");
          signOut(auth);
          navigate("/signin");
        }
      }
    };
    getProducts();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-center pt-5">User name :{user.displayName}</h1>
      <h3 className="text-center ">Total Items :{myProducts.length}</h3>
      <div className="col-10 col-md-8 col-lg-8 my-4 mx-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Supplier
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {myProducts.map((product) => (
                <ManageAllitemsTable key={product._id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyItems;
