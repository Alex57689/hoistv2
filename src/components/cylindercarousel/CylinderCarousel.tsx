import Image from "next/image";
import Link from "next/link";
import React from "react";

const CylinderCarousel: React.FC = () => {
  return (
    <section className="px-4 md:px-10 max-w-screen-xl mx-auto my-16 text-center">
      <h2 className="text-5xl font-semibold mb-8 text-primary">
        Hydraulic Cylinders
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-center ">
        <Link href="/cylinders">
          <div className="flex flex-col items-center  transform transition duration-300 hover:scale-105">
            <Image
              className="shadow-xl"
              src="/images/valve.jpg"
              alt="Valves"
              width={300}
              height={300}
              layout="intrinsic"
            />
            <h3 className="mt-4 text-1xl font-bold text-primary">
              Front Mount Hoist
            </h3>
          </div>
        </Link>
        <Link href="/cylinders">
          <div className="flex flex-col items-center  transform transition duration-300 hover:scale-105">
            <Image
              className="shadow-xl"
              src="/images/hoist.jpg"
              alt="Hoists"
              width={300}
              height={300}
              layout="intrinsic"
            />
            <h3 className="mt-4 text-1xl font-bold text-primary">
              Well Mount Hoists
            </h3>
          </div>
        </Link>
        <Link href="/cylinders">
          <div className="flex flex-col items-center  transform transition duration-300 hover:scale-105">
            <Image
              className="shadow-xl"
              src="/images/ptopump.jpg"
              alt="P.T.Os"
              width={300}
              height={300}
              layout="intrinsic"
            />
            <h3 className="mt-4 text-1xl font-bold text-primary">
              Double Acting Cylinders
            </h3>
          </div>
        </Link>
        <Link href="/cylinders">
          <div className="flex flex-col items-center  transform transition duration-300 hover:scale-105">
            <Image
              className="shadow-xl"
              src="/images/ptopump.jpg"
              alt="P.T.Os"
              width={300}
              height={300}
              layout="intrinsic"
            />
            <h3 className="mt-4 text-1xl font-bold text-primary">
              Underbody Hoists
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CylinderCarousel;
