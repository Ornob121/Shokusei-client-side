import React from "react";
import Banner from "../Banner/Banner";
import home1 from "../../../public/home1.png";
import home2 from "../../../public/home2.png";
import home3 from "../../../public/home3.png";
import ChefCards from "../ChefCards/ChefCards";
import FavoriteMeals from "../FavoriteMeals/FavoriteMeals";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div className="">
      <Banner>
        <div className="bg-zinc-100 pt-[100px] pb-[150px] md:px-24 px-7 grid md:grid-cols-2 gap-16">
          <div className="grid grid-cols-3 gap-5 banner-home">
            <img
              className=" w-[105%] md:h-96 h-56 md:mx-0 mx-auto relative bottom-10"
              src={home2}
              alt=""
            />
            <img className="w-auto md:h-[425px] h-64" src={home1} alt="" />
            <img
              className="w-auto md:h-72 h-44 relative bottom-10"
              src={home3}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-red-500 text-center md:text-left font-semibold text-xl md:pl-2">
              SHOKUSEI
            </h2>
            <h1 className="md:text-[70px] md:tracking-wide text-[40px] text-center md:text-left text-slate-600">
              Japanese Cuisines & Recipes
            </h1>
            <p className="text-[gray] md:text-base text-xs text-center md:text-left md:pt-0 pt-5">
              Here you will find top Japanese chefs and their top recipes for
              free so that you can try it at home with ease. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Aperiam aut ipsam nam vitae
              dignissimos dicta cum, optio sed debitis accusantium.
            </p>
          </div>
        </div>
      </Banner>
      <ChefCards></ChefCards>
      <FavoriteMeals></FavoriteMeals>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
