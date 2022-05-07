import React from "react";
import man404 from "../../../images/404man.jpg";

const NotFound = () => {
  return (
    <div className="">
      <h1 className="text-center p-4">
        404! <span className="text-danger">You came to a wrong page</span>
      </h1>
      <img src={man404} className="mx-auto d-block img-fluid mt-4" alt="" />
    </div>
  );
};

export default NotFound;
