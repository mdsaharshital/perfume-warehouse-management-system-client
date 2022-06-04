import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import ManageAllitemsTable from "../ManageAllitemsTable/ManageAllitemsTable";
import Loading from "../Shared/Loading/Loading";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const MyItems = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery("doctors", () =>
    fetch(`https://gentle-chamber-62295.herokuapp.com/myitems/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        toast.error("forbidden access");
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/signin");
      }
      return res.json();
    })
  );
  //
  useEffect(() => {
    if (!data?.success) return toast.error(data?.error);
  }, [data]);
  //
  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-center pt-5">User name :{user.displayName}</h1>
      <h3 className="text-center ">Total Items :{data?.data?.length}</h3>
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
              {data?.data?.map((product) => (
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

export default MyItems;
