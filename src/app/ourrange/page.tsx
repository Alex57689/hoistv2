import { FC } from "react";
import CarouselTile from "@/components/carouseltile/CarouselTile";

const cylindersSection = {
  id: "cylinders",
  heading: "Hydraulic Cylinders",
  tiles: [
    {
      name: "Gorilla Well Mount Hoists",
      imgLink: "/images/gc.jpg",
      tileLink: "/cylinders#gc",
    },
        {
      name: "BLT Front Mount Hoists",
      imgLink: "/images/blt.jpg",
      tileLink: "/cylinders#wombat",
    },
        {
      name: "EMU Underbody Hoists",
      imgLink: "/images/emu.jpg",
      tileLink: "/cylinders#emu",
    },
        {
      name: "Double Acting Cylinders",
      imgLink: "/images/da.jpg",
      tileLink: "/cylinders#da",
    },
  ],
};

const valveSection = {
  id: "Valves",
  heading: "Valves",
  tiles: [
    {
      name: "Tipping Valves",
      imgLink: "/images/valve.jpg",
    },
        {
      name: "Diverter Valves",
      imgLink: "/images/diverter.jpg",
    },
        {
      name: "Burst Protection Valves",
      imgLink: "/images/burst-valve.jpg",
    },
    {
      name: "Pneumatic Valves",
      imgLink: "/images/air-valve.jpg",
    },
  ],
};

const bodyHardwareSection = {
  id: "bodyHardware",
  heading: "Body Hardware",
  tiles: [
    {
      name: "Catches",
      imgLink: "/images/catch.jpg",
    },
        {
      name: "Pins",
      imgLink: "/images/pin.jpg",
    },
        {
      name: "Hinges",
      imgLink: "/images/hinge.jpg",
    },
    {
      name: "Tailgate Kits",
      imgLink: "/images/kits.jpg",
    },
  ],
};

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

<section id={cylindersSection.id}>
  <div className="px-4 md:px-10 max-w-screen-xl mx-auto my-16 text-center">
    <h2 className="text-5xl font-semibold mb-8 text-primary">
      {cylindersSection.heading}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-center">
      {cylindersSection.tiles.map((tile, index) => (
        <CarouselTile
          key={index}
          name={tile.name}
          imgLink={tile.imgLink}
          tileLink={tile.tileLink}
        />
      ))}
    </div>
  </div>
  <hr className="border-secondary" />
</section>

  <section id={valveSection.id}>
  <div className="px-4 md:px-10 max-w-screen-xl mx-auto my-16 text-center">
    <h2 className="text-5xl font-semibold mb-8 text-primary">
      {valveSection.heading}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-center">
      {valveSection.tiles.map((tile, index) => (
        <CarouselTile
          key={index}
          name={tile.name}
          imgLink={tile.imgLink}
        />
      ))}
    </div>
  </div>
  <hr className="border-secondary" />
</section>
<section id={bodyHardwareSection.id}>
  <div className="px-4 md:px-10 max-w-screen-xl mx-auto my-16 text-center">
    <h2 className="text-5xl font-semibold mb-8 text-primary">
      {bodyHardwareSection.heading}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-center">
      {bodyHardwareSection.tiles.map((tile, index) => (
        <CarouselTile
          key={index}
          name={tile.name}
          imgLink={tile.imgLink}
        />
      ))}
    </div>
  </div>
</section>
    </main>
  );
};

export default Ourrange;
