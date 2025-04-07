import FeatureSection from "@/components/featuredsection/FeaturedSection";
import { FC } from "react";

const Cylinders: FC = () => {
  return (
    <main>
      {/* Full-width background section OUTSIDE the constrained <main> */}
      <section className="bg-gray-100 py-16 w-full">
        <div className="max-w-6xl mx-auto px-4 text-gray-800">
          <h2 className="text-4xl font-semibold text-center text-primary mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            At Hoist Hydraulics, we proudly design and manufacture top-quality
            cylinders for a diverse range of applications. Our expertise and
            commitment to reliable service have made us a global leader in
            hydraulic solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {[
              {
                title: "Earth Moving",
                items: ["Tippers", "Excavators", "Dozers", "Dumpers", "And more..."],
              },
              {
                title: "Waste Management",
                items: ["Transfer Stations", "Garbage Compactors", "Stationary Compactors"],
              },
              {
                title: "Mining",
                items: ["Side Tippers", "Dumpers", "Loaders"],
              },
              {
                title: "Car Transportation",
                items: ["Multi-Stage & Single-Stage Cylinders"],
              },
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow border-t-4 border-primary"
              >
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {industry.title}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {industry.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-xl text-gray-800 max-w-4xl mx-auto">
            Our commitment to quality and unparalleled support has established us as a
            global leader in hydraulic cylinder solutions. If you require a custom
            cylinder that isn't listed here, it only means we haven't been asked to
            build it yet—and we're ready to rise to the challenge.
          </p>
        </div>
      </section>

        <div className="my-10 [&>section]:py-10 [&>section:nth-child(odd)]:bg-gray-100">
          <h2 className="text-4xl font-semibold mb-8 text-primary text-center">Hydraulic Cylinders</h2>

          <FeatureSection
            pdfUrl="/pdfs/gorilla.pdf"
            title={`"Gorilla" Well Mount Hoists`}
            imageSrc="/images/valve.jpg"
            altText="Gorilla Well Mount Hoists"
            features={[
              "Lower closed height",
              "Hardened chrome stages",
              "Pre-loaded low friction self adjustable seals",
              "2000 psi rating (140 Bar) operating pressure",
              "Positive sealing at high and low pressures",
              "No internal screwed parts",
              "Simple design eliminates special tools allowing ease of maintenance",
            ]}
          />

          <FeatureSection
            title={`"Emu" Underbody Hoists`}
            imageSrc="/images/valve.jpg"
            altText="Emu Underbody Hoists"
            features={[
              "Hardened Chrome Stages",
              "2000 psi rating (140 Bar) operating pressure",
              "Positive sealing at high and low pressures",
              "Simple design eliminates special tools allowing ease of maintenance",
            ]}
            reverse
          />

          <FeatureSection
            title={`"Wombat" Front Mount Hoists`}
            imageSrc="/images/valve.jpg"
            altText="Wombat Front Mount Hoists"
            features={[
              "More thrust per stage Large thrust diameters",
              "2000 psi rating (13.8 mpa) operating pressure",
              "Sealing surfaces precision honed",
              "Permanent pre-loaded seals",
              "Positive sealing at high and low pressures",
              "High tensile bronze top and bottom guides",
              "Superior design eliminates special tools for servicing",
              "High tensile hydraulic tubing",
            ]}
          />
        </div>
    </main>
  );
};

export default Cylinders;
