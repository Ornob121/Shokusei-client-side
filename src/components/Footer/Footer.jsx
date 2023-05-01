import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/Logo2.png";
import instagram from "../../../public/icons/insta.png";
import fb from "../../../public/icons/fb.png";
import twitter from "../../../public/icons/twitter.png";
import yt from "../../../public/icons/yt.png";

const Footer = () => {
  return (
    <footer className="bg-black relative bottom-0 right-0 left-0">
      <div className=" py-24 grid grid-cols-3 ">
        <div className="mx-auto pt-4">
          <h4 className="text-white text-3xl pb-2">Ready to cook?</h4>
          <p className="text-white">Sign up for our weekly newsletters!</p>
          <div className="mt-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              className="mr-4 py-2 pl-4 pr-12 text-xl rounded-md"
            />
            <button className="py-3 px-4 rounded-md text-white bg-red-500 font-bold hover:bg-green-600">
              SIGN UP
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-52" src={logo} alt="" />
          <div className="flex">
            <img className="rounded w-7 mr-4" src={fb} alt="" />
            <img className="rounded w-7 mr-4" src={instagram} alt="" />
            <img className="rounded w-7 mr-4" src={twitter} alt="" />
            <img className="rounded w-7" src={yt} alt="" />
          </div>
        </div>
        <div className="flex flex-col text-white mx-auto">
          <Link className="pb-1">About Us</Link>
          <Link className="pb-1">Contact</Link>
          <Link className="pb-1">Privacy Policy</Link>
          <Link className="pb-1">Advertise</Link>
          <Link className="pb-1">Editorial Guidelines</Link>
        </div>
      </div>
      <hr className="border border-slate-600 mx-10 mb-8" />
      <p className="text-white text-center pb-2">Copyright © 2023 SHOKUSEI</p>
    </footer>
  );
};

export default Footer;
