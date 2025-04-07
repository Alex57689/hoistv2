'use client'
import Image from "next/image";
import { FC } from "react";

interface SectionProps {
  title: string;
  imageSrc: string;
  altText: string;
  features: string[];
  pdfUrl?: string;
  reverse?: boolean;
}

const FeatureSection: FC<SectionProps> = ({
  title,
  imageSrc,
  altText,
  features,
  pdfUrl,
  reverse,
}) => (
  <section className="py-10">
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 max-w-6xl mx-auto px-4 md:px-6`}
    >
      <div className="flex-1">
        <div className="shadow-lg border border-gray-200 rounded-xl overflow-hidden bg-white">
          <Image
            className="mx-auto"
            src={imageSrc}
            alt={altText}
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="flex-1 text-gray-800">
        <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
        <h3 className="text-xl font-semibold text-secondary mb-3">
          Standard Features:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {features.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        {pdfUrl && (
          <button
            onClick={() => window.open(pdfUrl, "_blank")}
            className="mt-5 px-6 py-3 text-base sm:text-lg bg-primary hover:bg-primary-active text-white rounded-lg transition duration-200"
          >
            Brochure
          </button>
        )}
      </div>
    </div>
  </section>
);

export default FeatureSection;
