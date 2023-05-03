import React, { useContext } from "react";
import logo from "../../../public/Logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Banner from "../Banner/Banner";
import { AuthContext } from "../../providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <nav className="px-24 flex justify-between items-center bg-zinc-100">
        <Link to="/">
          {" "}
          <img className="w-32 pt-8" src={logo} alt="" />
        </Link>
        <div className="text-xl flex items-center nav-link ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            About Us
          </NavLink>
          {user && (
            <div className="pl-2" title={user?.displayName}>
              <FontAwesomeIcon
                className="text-5xl cursor-pointer pr-5 absolute top-5"
                icon={faUser}
              />
              <img
                src={user?.photoURL}
                className="w-16 rounded-full right-3 cursor-pointer mr-5 relative"
                alt=""
              />
            </div>
          )}
          {user ? (
            <Link onClick={handleLogOut} className="btn">
              Logout
            </Link>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "btn btn-error" : "btn btn-primary"
              }
            >
              <button className="text-center text-xl ">Login</button>
            </NavLink>
          )}
        </div>
      </nav>
      <Banner></Banner>
    </div>
  );
};

export default Header;
