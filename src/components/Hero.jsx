import React from "react";

const Hero = () => {
  return (
    <div className="font-skrikhand max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/** Overlay */}
        <div className="absolute w-full h-full text-cream max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-2xl tracking-wide">
            The <span className="text-burnt-orange">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-green drop-shadow-2xl shadow-cream tracking-wide">
            Foods <span className="text-cream">Delivered</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
