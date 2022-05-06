import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const MyItems = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-center py-5">My items {user.displayName}</h1>
    </div>
  );
};

export default MyItems;
