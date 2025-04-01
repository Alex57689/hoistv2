import Banner from "@/components/banner/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <>
  <section >
    <Banner />
  </section>
    <div className="min-h-screen flex flex-col bg-white">


      <section className="px-4 md:px-10 max-w-screen-xl mx-auto my-16">
        <h2 className="text-3xl font-semibold mb-4 text-left">
          Welcome to Hoist Hydraulics
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          Hoist Hydraulics was established in 1970 and is one of the largest
          suppliers of telescopic cylinders in Australia. Our continual goal is
          to achieve the very best for our customers by providing high quality
          products along with prompt reliable service.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          With over 40 years experience of supplying hydraulic cylinders and
          manufacturing special requirements, we are now a leader in the tipper
          hoist industry. Our customers' needs and suggestions are taken into
          account at all times, enabling us to offer quality products to cater
          for real necessities and not just theoretical requirements. With
          exports growing, international clients have come to respect the
          quality of Hoist Hydraulics cylinders.
        </p>

        <div className="text-center mb-8 mt-8">
          <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-active">
            Read More
          </button>
        </div>
      </section>

      <section className="px-4 md:px-10 max-w-screen-xl mx-auto my-16 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-primary">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div className="flex flex-col items-center">
            <Image
              src="/images/img-place.jpg"
              alt="Hoists"
              width={300}
              height={300}
              layout="intrinsic"
            />
            <h3 className="mt-4 text-xl font-medium">Hoists</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/img-place.jpg"
              alt="Valves"
              width={300}
              height={300}
              layout="intrinsic"
            />
            <h3 className="mt-4 text-xl font-medium">Valves</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/img-place.jpg"
              alt="P.T.Os"
              width={300}
              height={300}
              layout="intrinsic"
            />
            <h3 className="mt-4 text-xl font-medium">P.T.Os</h3>
          </div>
        </div>
        <div className="mt-8">
          <button className="bg-primary text-white py-3 px-8 rounded hover:bg-primary-active">
            Explore
          </button>
        </div>
      </section>
    </div>
    </>
  );
}
