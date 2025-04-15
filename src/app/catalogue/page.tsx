'use client'
import Image from "next/image";
import { FC } from "react";

const Catalogue: FC = () => {
  return (
    <main>
      <section className="bg-white py-16 w-full">
        <div className="max-w-6xl mx-auto px-4 text-gray-800">
          <h2 className="text-4xl font-semibold text-center text-primary mb-6">
            Catalogue
          </h2>
          <p className="text-lg text-center text-gray-700 mb-3 max-w-3xl mx-auto">
            Explore our full range of hydraulic equipment, parts, and accessories. You can preview the catalogue or download a copy to keep for offline reference.
          </p>

          <div className="flex flex-col items-center gap-6">
          <button onClick={() => window.open("/pdfs/hoist-hydraulics-catalogue.pdf", "_blank")} className="mt-5 px-6 py-3 text-base sm:text-lg bg-primary hover:bg-primary-active text-white rounded-lg transition duration-200">
                Download Catalogue (PDF)
              </button>
            <Image
              width={500}
              height={1000}
              src="/images/catalogue-preview.jpg"
              alt="Catalogue preview"
              className="w-full max-w-lg rounded-xl shadow-xl"
            />

       

          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalogue;
