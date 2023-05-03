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
      <div className=" md:py-24 py-12 grid md:grid-cols-3 grid-cols-1 ">
        <div className="mx-auto pt-4 text-center md:text-left">
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
            <button className="py-3 px-4 md:mt-0 mt-7 rounded-md text-white bg-red-500 font-bold hover:bg-green-600">
              SIGN UP
            </button>
          </div>
        </div>
        <div className="flex flex-col md:mt-0 mt-20 items-center">
          <img className="w-52" src={logo} alt="" />
          <div className="flex">
            <a href="https://facebook.com" target="_blank">
              <img className="rounded w-7 mr-4" src={fb} alt="" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <img className="rounded w-7 mr-4" src={instagram} alt="" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img className="rounded w-7 mr-4" src={twitter} alt="" />
            </a>
            <a href="https://youtube.com" target="_blank">
              <img className="rounded w-7" src={yt} alt="" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:mt-0 mt-24 text-white mx-auto">
          <div className="md:hidden flex justify-between items-center">
            <Link className="pb-1 md:pr-0 pr-2">About Us</Link>
            <Link className="pb-1 md:pr-0 pr-2">Contact</Link>
            <Link className="pb-1 md:pr-0 pr-2">Privacy Policy</Link>
            <Link className="pb-1 md:pr-0 pr-2">Advertise</Link>
            <Link className="pb-1 md:pr-0 pr-2">Editorial Guidelines</Link>
          </div>
          <Link className="pb-1 md:visible invisible">About Us</Link>
          <Link className="pb-1 md:visible invisible">Contact</Link>
          <Link className="pb-1 md:visible invisible">Privacy Policy</Link>
          <Link className="pb-1 md:visible invisible">Advertise</Link>
          <Link className="pb-1 md:visible invisible">
            Editorial Guidelines
          </Link>
        </div>
      </div>
      <hr className="border border-slate-600 mx-10 mb-8" />
      <p className="text-white text-center pb-2">Copyright © 2023 SHOKUSEI</p>
    </footer>
  );
};

export default Footer;
