import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] bg-[url('/images/IMG-0069.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-8xl mb-4 font-bold text-white">Hoist Hydraulics</h1>
        <h2 className="text-2xl md:text-4xl mt-2 text-white">Explore Our Range</h2>
        <button className="mt-4 px-6 py-2 bg-primary hover:bg-primary-active text-white rounded">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
