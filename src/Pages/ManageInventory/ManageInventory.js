import React from "react";
import useProducts from "../../hooks/useProducts";
import ManageAllitemsTable from "../ManageAllitemsTable/ManageAllitemsTable";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import { toast } from "react-toastify";

const ManageInventory = () => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();
  const [, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  // const handleDelete = (id) => {
  //   console.log(id);
  // const confrimDelete = window.confirm("Are you sure ?");
  // if (confrimDelete) {
  //     // fetch(`https://gentle-chamber-62295.herokuapp.com/product/${id}`, {
  //     //   method: "DELETE",
  //     // })
  //     //   .then((res) => res.json())
  //     //   .then((data) => {
  //     //     // if (data.success) {
  //     //     //   toast.error(data.error);
  //     //     // }
  //     //     const remaining = products.filter((p) => p._id !== id);
  //     //     console.log(remaining);
  //     //     setProducts(remaining);
  //     //     toast.success(data.message);
  //     //   });
  //     // console.log("id", id);
  //     // DELETE request using fetch with async/await
  // function deletePost() {
  //   fetch(`https://gentle-chamber-62295.herokuapp.com/product/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.success) {
  //         toast.error(data.error);
  //       }
  //       const remaining = products.filter((p) => p._id !== id);
  //       console.log(remaining);
  //       setProducts(remaining);
  //       toast.success(data.message);
  //     });
  // }

  // deletePost();
  // }
  // };
  // const handleDelete = (id) => {
  //   console.log(id);
  // };
  return (
    <div>
      <h1 className="text-center py-4">Manage inventory</h1>
      <h2 className="text-center my-2">Total Products : {products.length}</h2>
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
              {products.map((product) => (
                <ManageAllitemsTable key={product._id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
