import React from "react";
import fav1 from "../../../public/favorite/fav1.png";
import fav2 from "../../../public/favorite/fav2.png";
import fav3 from "../../../public/favorite/fav3.png";

const FavoriteMeals = () => {
  return (
    <div className="bg-[whitesmoke] bg-opacity-10">
      <h5 className="text-red-400 text-xl text-center font-semibold pt-16">
        Peoples Choice
      </h5>
      <h3 className="text-6xl pt-4 font-medium text-center">
        Most Favorite Recipes
      </h3>
      <p className="text-center text-[gray] pt-8 mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor <br />
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </p>
      <div className="flex px-24 gap-6 pt-5 pb-44">
        <div className="mx-auto text-center">
          <img
            className="h-[282px] mx-auto duration-500 hover:scale-125"
            src={fav1}
            alt=""
          />
          <h4 className="text-3xl tracking-wide pt-10">Tonkotsu Ramen</h4>
          <p className="text-[gray] text-lg tracking-wider pt-5">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit.
          </p>
        </div>
        <div className="mx-auto text-center">
          <img
            className="h-[282px] mx-auto duration-500 hover:scale-125"
            src={fav2}
            alt=""
          />
          <h4 className="text-3xl tracking-wide pt-10">Okusawa Package</h4>
          <p className="text-[gray] text-lg tracking-wider pt-5">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit.
          </p>
        </div>
        <div className="mx-auto text-center">
          <img
            className="h-[282px] mx-auto duration-500 hover:scale-125"
            src={fav3}
            alt=""
          />
          <h4 className="text-3xl tracking-wide pt-10">Tuna Sashimi</h4>
          <p className="text-[gray] text-lg tracking-wider pt-5">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteMeals;
