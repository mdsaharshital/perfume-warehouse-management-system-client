import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { BsGithub, BsGoogle } from "react-icons/bs";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, GithubUser, GithubLoading, GithubError] =
    useSignInWithGithub(auth);
  let errorElement;
  if (GoogleError || GithubError) {
    errorElement = "";
    errorElement = (
      <div className="">
        <p className="text-danger">
          {GoogleError?.message}
          {GithubError?.message}
        </p>
      </div>
    );
  }
  if (GoogleLoading || GithubLoading) {
    return <Loading />;
  }
  if (GoogleUser || GithubUser) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="bg-secondary w-50" style={{ height: "1px" }}></div>
        <p className="mt-3 px-3">OR</p>
        <div className="bg-secondary w-50" style={{ height: "1px" }}></div>
      </div>
      <h3 className="text-center">Other options to log in</h3>
      {errorElement}
      <div className="d-flex justify-content-center align-items-center">
        <BsGithub
          onClick={() => signInWithGithub()}
          className="mx-2 fs-2"
          style={{ cursor: "pointer" }}
        />
        <BsGoogle
          onClick={() => signInWithGoogle()}
          className="mx-2 fs-2"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default SocialLogin;
