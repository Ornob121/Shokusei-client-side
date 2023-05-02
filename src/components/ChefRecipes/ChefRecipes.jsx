import React from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Banner from "../Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Recipe from "../Recipe/Recipe";

const ChefRecipes = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="text-center">
        <progress className="progress w-96"></progress>
        <br />
        <progress className="progress w-96"></progress>
        <br />
        <progress className="progress w-96"></progress>
        <br />
        <progress className="progress w-96"></progress>
      </div>
    );
  }

  const navigate = useNavigate();
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner>
        <div className="bg-zinc-100 pt-[100px] pb-[150px] px-24 grid grid-cols-2 gap-16 items-center">
          <div>
            <img
              className=" w-auto shadow-lg h-72 mx-auto relative bottom-10"
              src={data.picture}
              alt="Chefs picture"
            />
            <div className="flex justify-evenly">
              <p className="pb-2 text-xl">
                Years of experience:{" "}
                <span className="text-blue-400">
                  {data.years_of_experience}
                </span>{" "}
                Years
              </p>
              <p className="pb-4 text-xl">
                <FontAwesomeIcon className="text-red-400" icon={faHeart} />{" "}
                {data.like}
              </p>
              <p className="pb-3 text-xl">
                Number of recipes :{" "}
                <span className="text-red-500">{data.num_of_recipes}</span>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-red-500 font-semibold text-xl">Chef</h2>
            <h1 className="text-[80px] text-slate-600">{data.name}</h1>
            <p className="text-[gray]">{data.bio}</p>
          </div>
        </div>
      </Banner>
      <div>
        <h2 className="text-center text-red-500 text-4xl mt-20">Recipes</h2>
        <div className="grid grid-cols-2 mt-10 mb-12 gap-7">
          {data.recipes.map((recipe, i) => (
            <Recipe key={i} recipe={recipe}></Recipe>
          ))}
        </div>
      </div>
      <div className="text-center">
        {" "}
        <button
          onClick={() => navigate(-1)}
          className="btn mb-12 btn-outline btn-secondary"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ChefRecipes;
