import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Chefs = ({ chef }) => {
  const navigate = useNavigate();

  const { id, like, name, picture, num_of_recipes, years_of_experience } = chef;
  return (
    <div className="w-[310px] text-center shadow-2xl rounded-lg mx-auto">
      <img className="w-[309px] h-96 pb-4" src={picture} alt="" />
      <h3 className="text-2xl pb-2 text-slate-400">{name}</h3>
      <p className="pb-2">
        Years of experience:{" "}
        <span className="text-blue-400">{years_of_experience}</span> Years
      </p>
      <p className="pb-3">
        Number of recipes :{" "}
        <span className="text-red-500">{num_of_recipes}</span>
      </p>
      <p className="pb-4">
        <FontAwesomeIcon className="text-red-400" icon={faHeart} /> {like}
      </p>
      <button
        className="btn btn-outline btn-primary mb-7"
        onClick={() => navigate(`/chefs/${id}`)}
      >
        View Recipes
      </button>
    </div>
  );
};

export default Chefs;
