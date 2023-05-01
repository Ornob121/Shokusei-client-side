import React from "react";
import logo from "../../../public/Logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="px-24 flex justify-between items-center bg-zinc-100">
      <Link to="/">
        {" "}
        <img className="w-32 pt-8" src={logo} alt="" />
      </Link>
      <div className="text-xl nav-link ">
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
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          <button className="btn bg-red-500">Login</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
