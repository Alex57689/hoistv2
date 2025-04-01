import Banner from "@/components/banner/Banner";
import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <Banner />
      </section>
      <div className="min-h-screen flex flex-col bg-white">
        <section className="px-4 md:px-10 max-w-screen-xl mx-auto my-16">
          <h2 className="text-3xl font-semibold mb-4 text-left">
            Welcome to Hoist Hydraulics
          </h2>
          <p className="mb-4 text-lg text-gray-700">
            Hoist Hydraulics was established in 1970 and is one of the largest
            suppliers of telescopic cylinders in Australia. Our continual goal
            is to achieve the very best for our customers by providing high
            quality products along with prompt reliable service.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            With over 50 years’ experience in manufacturing and the supply of
            the industry standard cylinders, we have also manufactured special
            application cylinders for specific customer requirements.  Our
            customers’ needs and suggestions are taken into account at all
            times, enabling us to offer high quality products to cater for real
            necessities and not just theoretical requirements.  With exports
            growing, international clients have come to respect the quality of
            Hoist Hydraulics cylinders.
          </p>

          <div className="text-center mb-8 mt-8">
            <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-active">
              <Link href="/company-profile"> Read More</Link>
            </button>
          </div>
        </section>

        <section className="bg-gray-100">
          <Carousel />
        </section>

        <section className="h-100">

        </section>
      </div>
    </>
  );
}
