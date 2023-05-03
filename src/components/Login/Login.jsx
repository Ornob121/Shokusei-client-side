import React, { useCallback, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../../public/icons/google.png";
import github from "../../../public/icons/github.png";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { logInUser, googleSignIn, gitHubSignIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [viewPass, setViewPass] = useState(false);
  const showPass = () => {
    setViewPass(!viewPass);
  };

  const [error, setError] = useState("");

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        toast("Login Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleGitHubLogIn = () => {
    gitHubSignIn()
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        toast("Login Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        toast("Login Successful");
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message.includes("wrong-password")) {
          setError("Your password did not matched");
        }
        if (err.message.includes("user-not-found")) {
          setError("User not found");
        }
      });
  };

  return (
    <div className="mx-auto w-[480px] bg-slate-100 text-center my-5">
      <div className="bg-white drop-shadow-xl p-10">
        <h2 className="text-2xl font-bold pb-3">Login to your account</h2>
        <p className="mb-7">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign Up Free!
          </Link>
        </p>
        <div className="flex items-center justify-around">
          <img
            onClick={handleGoogleLogIn}
            className="h-12 w-32 cursor-pointer"
            src={google}
            alt=""
          />
          <img
            onClick={handleGitHubLogIn}
            className="h-12 w-28 rounded-sm cursor-pointer"
            src={github}
            alt=""
          />
        </div>
        <div className="grid grid-cols-3 items-center mt-6">
          <hr />
          <p className="text-2xl text-slate-400">or</p>
          <hr />
        </div>
        <p className="text-red-500">{error}</p>
        <form onSubmit={handleLogIn}>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={`${viewPass ? "text" : "password"}`}
              required
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            {viewPass ? (
              <FontAwesomeIcon
                onClick={showPass}
                className="relative -top-9  left-[365px] text-2xl w-8 cursor-pointer"
                icon={faEye}
              />
            ) : (
              <FontAwesomeIcon
                onClick={showPass}
                className="relative -top-9 left-[365px] text-2xl w-8 cursor-pointer"
                icon={faEyeSlash}
              />
            )}

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
