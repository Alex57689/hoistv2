'use client'
import Image from "next/image";
import { FC } from "react";



const ValveCarousel: React.FC = () => {
  return (
    <section className="px-4 md:px-10 max-w-screen-xl mx-auto my-16 text-center">
      <h2 className="text-5xl font-semibold mb-8 text-primary">
        Valves
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-center ">

        <div className="flex flex-col items-center  transform transition duration-300 hover:scale-105">
          <Image
            className="shadow-xl"
            src="/images/valve.jpg"
            alt="Valves"
            width={300}
            height={300}
            layout="intrinsic"
          />
          <h3 className="mt-4 text-1xl font-bold text-primary">Tipping Valves</h3>
        </div>
        <div className="flex flex-col items-center  transform transition duration-300 hover:scale-105">
          <Image
            className="shadow-xl"
            src="/images/hoist.jpg"
            alt="Hoists"
            width={300}
            height={300}
            layout="intrinsic"
          />
          <h3 className="mt-4 text-1xl font-bold text-primary">Diverter Valves</h3>
        </div>
        <div className="flex flex-col items-center  transform transition duration-300 hover:scale-105">
          <Image
            className="shadow-xl"
            src="/images/burst-valve.jpg"
            alt="Burst protection valve"
            width={300}
            height={300}
            layout="intrinsic"
          />
          <h3 className="mt-4 text-1xl font-bold text-primary">Burst Protection Valves</h3>
        </div>
        <div className="flex flex-col items-center  transform transition duration-300 hover:scale-105">
          <Image
            className="shadow-xl"
            src="/images/air-valve.jpg"
            alt="Burst protection valve"
            width={300}
            height={300}
            layout="intrinsic"
          />
          <h3 className="mt-4 text-1xl font-bold text-primary">Pneumatic Valves</h3>
        </div>
      </div>
    </section>
  );
};

export default ValveCarousel;
