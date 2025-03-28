import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <main>
        <section>
          <Banner></Banner>
        </section>
        <section className="max-w-1000 mr-10 ml-10">
          <h2>Welcome to Hoist Hydraulics</h2>
          <p>
            Hoist Hydraulics was established in 1970 and is one of the largest
            suppliers of telescopic cylinders in Australia. Our continual goal
            is to achieve the very best for our customers by providing high
            quality products along with prompt reliable service.
          </p>
          <p>
            With over 50 years experience in manufacturing and supply of the
            industry standard requirement, we have also  manufactured special
            application cylinders for specific customer requirements; with our
            customers’ needs and suggestions taken into account at all times,
            enabling us to offer quality products to cater for real necessities
            and not just theoretical requirements.  With exports growing,
            international clients have come to respect the quality of Hoist
            Hydraulics cylinders.
          </p>

          <div><button>Read More</button></div>
        </section>
        <section className="mr-40 ml-40 flex text-center flex-col">
        <h2 className="text-6xl my-10">Featured Products</h2>
        <div className="flex justify-between gap-1">
          <div><img className="max-w-[300px]" src="img-place.jpg"/> <h3>Hoists</h3></div>
          <div><img className="max-w-[300px]" src="img-place.jpg"/> <h3>Valves</h3></div>
          <div><img className="max-w-[300px]" src="img-place.jpg"/> <h3>P.T.O. & Pumps</h3></div>
        </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
