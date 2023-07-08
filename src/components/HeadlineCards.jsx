import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 font-tenor-sans">
      {/**Card */}
      <div className="rounded-xl relative">
        {/**Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-cream">
          <p className="font-bold text-2xl px-2 pt-4">
            Savor the savings, devour the deliciousness!
          </p>
          <p className="px-2">Through 8/6</p>
          <button className="border-forest-green bg-forest-green text-cream mx-2 absolute bottom-4 rounded-lg px-4 py-2 font-skrikhand shadow-2xl shadow-white">
            Order Now!
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/8743914/pexels-photo-8743914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      {/**Card */}
      <div className="rounded-xl relative">
        {/**Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-cream">
          <p className="font-bold text-2xl px-2 pt-4">
            Deliciously discounted dining.
          </p>
          <p className="px-2">Every Day!</p>
          <button className="border-forest-green bg-forest-green text-cream mx-2 absolute bottom-4 rounded-lg px-4 py-2 font-skrikhand shadow-2xl shadow-white">
            Order Now!
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/4929715/pexels-photo-4929715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      {/**Card */}
      <div className="rounded-xl relative">
        {/**Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-cream">
          <p className="font-bold text-2xl px-2 pt-4">Eat. Save. Repeat.</p>
          <p className="px-2">Through 12/25</p>
          <button className="border-forest-green bg-forest-green text-cream mx-2 absolute bottom-4 rounded-lg px-4 py-2 font-skrikhand shadow-2xl shadow-white">
            Order Now!
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/9201333/pexels-photo-9201333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
