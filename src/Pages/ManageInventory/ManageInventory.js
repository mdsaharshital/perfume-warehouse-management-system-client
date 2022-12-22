import React from "react";
import ManageAllitemsTable from "../ManageAllitemsTable/ManageAllitemsTable";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import { useQuery } from "react-query";

const ManageInventory = () => {
  const navigate = useNavigate();
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("https://perfume-server.onrender.com/products").then((res) =>
      res.json()
    )
  );
  const [, loading] = useAuthState(auth);
  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-center py-4">Manage inventory</h1>
      <h2 className="text-center my-2">
        Total Products : {products.data.length}
      </h2>
      <button
        onClick={() => navigate("/addnewitems")}
        className="btn hero-btn my-3 d-block mx-auto"
      >
        Add new items
      </button>

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
              {products?.data.map((product) => (
                <ManageAllitemsTable
                  key={product._id}
                  refetch={refetch}
                  product={product}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
