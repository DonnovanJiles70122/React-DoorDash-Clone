import React from "react";
import { categories } from "../data/data";

const Category = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-burnt-orange font-skrikhand font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-cream rounded-lg p-4 flex justify-between items-center font-skrikhand"
          >
            <h2 className="tracking-widest sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
