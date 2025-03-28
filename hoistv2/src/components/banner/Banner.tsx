import React from "react";
const Banner: React.FC = () => {
  return (
<div className="flex w-full bg-[url('/IMG-0069.jpg')] bg-cover bg-center h-[500px]">
  <div className="bg-gray-900/20 p-10  m-auto text-black text-center">
    <h1 className="text-8xl mb-4 font-bold">Hoist Hydraulics</h1>
    <h4 className="text-4xl mt-2">Explore Our Range</h4>
    <button className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-500 rounded">Explore</button>
  </div>
</div>
  );
};

export default Banner;
