import Link from "next/link";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] bg-[url('/images/large-truck.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3">
          Hoist Hydraulics
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white">
          Explore Our Range
        </h2>
            <button className="mt-5 bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-active">
              <Link href="/cylinders"> Our Range</Link>
            </button>

      </div>
    </div>
  );
};

export default Banner;
