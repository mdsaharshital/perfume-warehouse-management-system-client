import React from "react";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import useProducts from "../../hooks/useProducts";

const ManageAllitemsTable = ({ product, refetch }) => {
  const [products, setProducts] = useProducts();

  const [, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  const { _id, name, supplier, quantity, price } = product;

  const handleDelete = (id) => {
    const confrimDelete = window.confirm("Are you sure ?");
    if (confrimDelete) {
      async function deletePost() {
        fetch(`https://gentle-chamber-62295.herokuapp.com/product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              toast.error(data.error);
            }
            const remaining = products.filter((p) => p._id !== id);
            setProducts(remaining);
            refetch();
            toast.success(data.message);
          });
      }

      deletePost();
    }
  };
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          {name}
        </th>
        <td className="px-6 py-4">{supplier}</td>
        <td className="px-6 py-4">{quantity}</td>
        <td className="px-6 py-4">${price}</td>
        <td className="px-6 py-4 text-right">
          <span
            onClick={() => handleDelete(_id)}
            className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline"
          >
            Delete
          </span>
        </td>
      </tr>
    </>
  );
};

export default ManageAllitemsTable;
