import React, { useContext, useState } from "react";
import logo from "../../../public/Logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Banner from "../Banner/Banner";
import { AuthContext } from "../../providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="md:px-24 px-7 flex justify-between items-center bg-zinc-100">
        <Link to="/">
          {" "}
          <img className="w-32 pt-8 " src={logo} alt="" />
        </Link>

        <div className="text-xl flex items-center nav-link ">
          <ul
            className={`md:flex md:static absolute items-center ${
              isMenuOpen
                ? "-top-56 right-4"
                : "top-8 left-12 relative bg-red-300 rounded-lg p-4"
            } duration-500`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
              >
                Blog
              </NavLink>
            </li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              About Us
            </NavLink>
            <li>
              {user && (
                <div className="pl-2 md:py-0 py-3" title={user?.displayName}>
                  <FontAwesomeIcon
                    className="text-5xl cursor-pointer pr-5 absolute md:top-5"
                    icon={faUser}
                  />
                  <img
                    src={user?.photoURL}
                    className="w-16 rounded-full right-3 cursor-pointer mr-5 relative"
                    alt=""
                  />
                </div>
              )}
            </li>
            <li>
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
            </li>
          </ul>
        </div>
        <div
          onClick={handleIsMenuOpen}
          className="md:hidden bg-zinc-100 pt-12 cursor-pointer"
        >
          <span className="text-3xl">
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon className=" absolute top-12" icon={faXmark} />
            )}
          </span>
        </div>
      </nav>
      <Banner></Banner>
    </div>
  );
};

export default Header;
