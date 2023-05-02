import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Recipe = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  console.log(favorite);
  console.log(recipe);
  const { name, ingredients, cookingMethod, rating } = recipe;
  return (
    <div className=" shadow-2xl w-[650px] rounded-lg mx-auto p-10">
      <div className="flex items-center mb-5">
        <h2 className="text-5xl flex-1 text-slate-400">{name}</h2>
        <button onClick={() => setFavorite(true)} disabled={favorite}>
          {" "}
          <FontAwesomeIcon
            className={`text-red-400 text-3xl cursor-pointer ${
              favorite ? "text-red-100" : ""
            }`}
            icon={faHeart}
          />{" "}
        </button>
      </div>
      <div className="flex">
        <Rating
          style={{ maxWidth: 100 }}
          value={Math.round(rating || 0)}
          readOnly
        />
        <span className="ps-2">{rating}</span>
      </div>
      <p className="text-red-400 text-xl mt-4">Ingredients:</p>
      <div className="pb-5 pl-28 text-[gray]">
        {ingredients.map((ingredient, i) => (
          <li>{ingredient}</li>
        ))}
      </div>
      <h5 className="text-blue-800 text-2xl">Cooking Method:</h5>
      <p className="text-lg text-[gray]">{cookingMethod}</p>
    </div>
  );
};

export default Recipe;
