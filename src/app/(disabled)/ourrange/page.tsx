import { FC } from "react";
import CylinderCarousel from "@/components/cylindercarousel/CylinderCarousel";
import ValveCarousel from "@/components/valvecarousel/ValveCarousel";
import PtoCarousel from "@/components/ptocarousel/PtoCarousel";

const Ourrange: FC = () => {

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className=" text-3xl font-bold mb-6">Our Product Range</h1>
      <div className="space-y-4 leading-relaxed">
        <p>
          For over 50 years, Hoist Hydraulics has supplied quality hydraulic
          products across industries. From hoses and fittings to lifting and
          fluid systems, our range is built for performance and reliability. Our
          experienced team is here to help you find the right solution for any
          hydraulic need.
        </p>
      </div>

      <section id="cylinders">
        <CylinderCarousel />
        <hr className="border-secondary" />
      </section>

      <section id="valves">
        <ValveCarousel/>
        <hr className="border-secondary" />
      </section>

      <section id="pto">
        <PtoCarousel />
      </section>

    </main>
  );
};

export default Ourrange;
