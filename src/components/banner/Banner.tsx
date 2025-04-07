import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] bg-[url('/images/IMG-0069.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3">
          Hoist Hydraulics
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white">
          Explore Our Range
        </h2>
        <button className="mt-5 px-6 py-3 text-base sm:text-lg bg-primary hover:bg-primary-active text-white rounded-lg transition duration-200">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
