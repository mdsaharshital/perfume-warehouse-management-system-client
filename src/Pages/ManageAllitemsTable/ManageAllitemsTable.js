import React from "react";
import "./ManageAllitemsTable.css";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const ManageAllitemsTable = ({ product }) => {
  const [, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  const { _id, name, supplier, quantity, price } = product;

  const handleDelete = async (id) => {
    const confrimDelete = window.confirm("Are you sure ?");
    if (confrimDelete) {
      // console.log("id", id);
      // DELETE request using fetch with async/await
      function deletePost() {
        fetch(`http://localhost:5000/product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.success) {
              toast.error(data.error);
            }
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
