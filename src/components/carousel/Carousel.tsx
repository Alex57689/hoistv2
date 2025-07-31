import Image from "next/image";
import Link from "next/link";
import React from "react";

const Carousel: React.FC = () => {
  return (
    <section className="px-4 md:px-10 max-w-screen-xl mx-auto my-16 text-center">
      <h2 className="text-4xl font-semibold mb-8 text-primary">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center ">
        <Link href='/#'>
        <div className="flex flex-col items-center  transform transition duration-300 hover:scale-105">
          <Image
            className="shadow-xl"
            src="/images/gc.jpg"
            alt="Hoists"
            width={400}
            height={400}
            layout="intrinsic"
          />
          <h3 className="mt-4 text-2xl font-bold text-primary">Hoists</h3>
        </div>
        </Link>
        <Link href='/#'>
        <div className="flex flex-col items-center  transform transition duration-300 hover:scale-105">
          <Image
            className="shadow-xl"
            src="/images/valve.jpg"
            alt="Valves"
            width={400}
            height={400}
            layout="intrinsic"
          />
          <h3 className="mt-4 text-2xl font-bold text-primary">Valves</h3>
        </div>
        </Link>
        <Link href='/#'>
        <div className="flex flex-col items-center  transform transition duration-300 hover:scale-105">
          <Image
            className="shadow-xl"
            src="/images/ptopump.jpg"
            alt="P.T.Os"
            width={400}
            height={400}
            layout="intrinsic"
          />
          <h3 className="mt-4 text-2xl font-bold text-primary">P.T.O. Pumps</h3>
        </div>
        </Link>
      </div>
      {/* 
      <div className="mt-8">
        <button className="bg-primary text-white py-3 px-8 rounded hover:bg-primary-active">
         <Link href='/ourrange'>Explore Products</Link> 
        </button>
      </div>
      */}
    </section>
  );
};

export default Carousel;
