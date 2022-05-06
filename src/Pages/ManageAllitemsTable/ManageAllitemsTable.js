import React from "react";
import "./ManageAllitemsTable.css";

const ManageAllitemsTable = ({ product }) => {
  const { _id, name, supplier, quantity, price } = product;
  const handleDelete = (id) => {
    console.log("id", id);
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
