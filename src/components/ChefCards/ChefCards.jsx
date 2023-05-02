import React from "react";
import { useLoaderData } from "react-router-dom";
import Chefs from "../Chefs/Chefs";

const ChefCards = () => {
  const chefs = useLoaderData();
  //   console.log(chefs);
  return (
    <div className="my-16">
      <h2 className="text-center text-red-500 text-3xl font-semibold pb-5">
        Chefs
      </h2>
      <p className="text-center px-96 mb-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
        tempore molestiae ipsa? Exercitationem, nemo quo quis eos numquam
        obcaecati, architecto blanditiis, magni debitis libero fugiat
        reprehenderit. Commodi, tempora. Delectus, illum?
      </p>
      <div className="grid grid-cols-3 gap-7">
        {chefs.map((chef) => (
          <Chefs key={chef.id} chef={chef}></Chefs>
        ))}
      </div>
    </div>
  );
};

export default ChefCards;
