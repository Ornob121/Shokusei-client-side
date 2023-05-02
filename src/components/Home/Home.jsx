import React from "react";
import Banner from "../Banner/Banner";
import home1 from "../../../public/home1.png";
import home2 from "../../../public/home2.png";
import home3 from "../../../public/home3.png";
import chef from "../../../public/chef.png";

const Home = () => {
  return (
    <div>
      <Banner>
        <div className="bg-zinc-100 pt-[100px] pb-[150px] px-24 grid grid-cols-2 gap-16">
          <div className="grid grid-cols-3 gap-5 banner-home">
            <img
              className=" w-auto h-96 relative bottom-10"
              src={home2}
              alt=""
            />
            <img className="w-auto h-[425px]" src={home1} alt="" />
            <img
              className="w-auto h-72 relative bottom-10"
              src={home3}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-red-500 font-semibold text-xl">SHOKUSEI</h2>
            <h1 className="text-[80px] text-slate-600">
              Japanese Cuisines & Recipes
            </h1>
            <p className="text-[gray]">
              Here you can find top Japanese chefs and their top recipes for
              free so that you can try it at home with ease. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Aperiam aut ipsam nam vitae
              dignissimos dicta cum, optio sed debitis accusantium.
            </p>
          </div>
        </div>
      </Banner>
    </div>
  );
};

export default Home;
