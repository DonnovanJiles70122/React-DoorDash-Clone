import React, { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  console.log(data);
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-burnt-orange font-bold text-4xl text-center font-skrikhand tracking-wider">
        Best Menu Items
      </h1>
      {/**Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between py-2">
        {/**Filter Type */}
        <div className="font-tenor-sans">
          <p className="font-bold text-dark-green py-2">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="border-2 mx-2 rounded-lg px-4 py-2 border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-cream"
            >
              All
            </button>
            <button
              onClick={() => filterType("Burger")}
              className="border-2 mx-2 rounded-lg px-4 py-2 border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-cream"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("Pizza")}
              className="border-2 mx-2 rounded-lg px-4 py-2 border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-cream"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("Italian")}
              className="border-2 mx-2 rounded-lg px-4 py-2 border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-cream"
            >
              Italian
            </button>
            <button
              onClick={() => filterType("Dessert")}
              className="border-2 mx-2 rounded-lg px-4 py-2 border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-cream"
            >
              Dessert
            </button>
          </div>
        </div>
        {/**Filter Price */}
        <div className="font-tenor-sans">
          <p className="font-bold text-forest-green py-2">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="border-2 mx-2 rounded-lg px-4 py-2 border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-cream"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border-2 mx-2 rounded-lg px-4 py-2 border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-cream"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border-2 mx-2 rounded-lg px-4 py-2 border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-cream"
            >
              $$$
            </button>
          </div>
        </div>
      </div>
      {/**Display Food */}
      <div className="font-tenor-sans tracking-widest grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="shadow-2xl rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4 font-bold">
              <p>{item.name}</p>
              <p>
                <span className="bg-burnt-orange text-cream p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
