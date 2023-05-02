import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import google from "../../../public/icons/google.png";
import github from "../../../public/icons/github.png";

const SingUp = () => {
  const [viewPass, setViewPass] = useState(false);
  const showPass = () => {
    setViewPass(!viewPass);
  };
  return (
    <div className="mx-auto w-[480px] bg-slate-100 text-center mt-5">
      <div className="bg-white drop-shadow-xl p-10">
        <h2 className="text-2xl font-bold pb-3">Sign up for free!</h2>

        <div className="flex items-center justify-around">
          <img className="h-12 w-32" src={google} alt="" />
          <img className="h-12 w-28 rounded-sm" src={github} alt="" />
        </div>
        <div className="grid grid-cols-3 items-center mt-6">
          <p>
            <hr />
          </p>
          <p className="text-2xl text-slate-400">or</p>
          <p>
            <hr />
          </p>
        </div>
        <form>
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
                className="relative -top-9  left-[365px] text-2xl w-8"
                icon={faEye}
              />
            ) : (
              <FontAwesomeIcon
                onClick={showPass}
                className="relative -top-9 left-[365px] text-2xl w-8"
                icon={faEyeSlash}
              />
            )}

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              required
              className="mr-3"
            />
            <label htmlFor="checkbox">
              I Agree to{" "}
              <Link className="text-blue-500 underline " href="">
                privacy policy
              </Link>{" "}
              and{" "}
              <Link className="text-blue-500 underline " href="">
                terms of service.
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="mt-4">
            <Link to="/signup" className="text-blue-500 underline font-light">
              Already have an account?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
