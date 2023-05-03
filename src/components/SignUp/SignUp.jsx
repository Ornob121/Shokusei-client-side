import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate } from "react-router-dom";
import google from "../../../public/icons/google.png";
import github from "../../../public/icons/github.png";
import { AuthContext } from "../../providers/AuthProvider";
import { reload, updateProfile } from "firebase/auth";

const SingUp = () => {
  const { createUser, googleSignIn, gitHubSignIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const [viewPass, setViewPass] = useState(false);
  const showPass = () => {
    setViewPass(!viewPass);
  };

  const [error, setError] = useState("");

  const handleGoogleSingIn = () => {
    googleSignIn()
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        navigate("/", { replace: true });
        toast("SignUp Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleGitHubSignIn = () => {
    gitHubSignIn()
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        navigate("/", { replace: true });
        toast("SignUp Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;
    setError("");
    if (password.length < 6) {
      return setError("Your password should be more than 6 characters");
    }

    if (!email || !password) {
      setError("Your email and password cannot be empty");
    }

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;

        // ! Updating the user name an photo url
        if (name || photo) {
          updateProfile(newUser, {
            displayName: name,
            photoURL: photo,
          })
            .then((res) => {
              console.log(res);
              window.location.reload("/");
            })
            .catch((err) => {
              console.log(err.message);
            });
        }

        console.log(newUser);
        form.reset();
        setError("");
        navigate("/", { replace: true });
        toast("SignUp Successful");
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message.includes("invalid-email")) {
          setError("Your email is not valid");
        }
        if (err.message.includes("email-already-in-use")) {
          setError("This email is already in use");
        }
      });

    console.log(email, password, photo, name);
  };

  return (
    <div className="mx-auto w-[480px] bg-slate-100 text-center my-5">
      <div className="bg-white drop-shadow-xl p-10">
        <h2 className="text-2xl font-bold pb-3">Sign up for free!</h2>

        <div className="flex items-center justify-around">
          <img
            onClick={handleGoogleSingIn}
            className="h-12 w-32 cursor-pointer"
            src={google}
            alt=""
          />
          <img
            className="h-12 w-28 rounded-sm cursor-pointer"
            src={github}
            onClick={handleGitHubSignIn}
            alt=""
          />
        </div>
        <div className="grid grid-cols-3 items-center mt-6">
          <hr />
          <p className="text-2xl text-slate-400">or</p>
          <hr />
        </div>
        <p className="text-red-500">{error}</p>
        <form onSubmit={handleSingUp}>
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              name="name"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              name="photo"
            />
          </div>
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
          </div>
          <div className="flex items-center">
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
            <input className="btn btn-primary" type="submit" value="SignUp" />
          </div>
          <p className="mt-4">
            <Link to="/login" className="text-blue-500 underline font-light">
              Already have an account?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
