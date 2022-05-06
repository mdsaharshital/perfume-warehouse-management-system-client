import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1 className="text-center py-5">My items {user.displayName}</h1>
    </div>
  );
};

export default MyItems;
