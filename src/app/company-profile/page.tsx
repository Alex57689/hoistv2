import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
const Company: FC = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl text-primary font-bold mb-6">
        Commitment to the Industry
      </h1>

      <div className="mb-8">
        <Image
          src="/images/mining-truck.jpg"
          alt="Hoist Hydraulics Building"
          width={800}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="space-y-4 leading-relaxed">
        <p>
          <strong>Hoist Hydraulics</strong> was established in{" "}
          <strong>1970</strong> and is one of the largest suppliers of
          telescopic cylinders in Australia. With over 50 years of experience,
          we have become a leader in the hydraulics industry, serving sectors
          such as mining, earthmoving, agriculture, and waste management. Our
          continual goal is to provide high-quality products and prompt,
          reliable service.
        </p>

        <p>
          With exports growing, international clients have come to respect the
          quality of Hoist Hydraulics cylinders. Our customers’ needs and
          suggestions are taken into account at all times, enabling us to offer
          practical, high-performing solutions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-primary">
          Our Product Range
        </h2>

        <p>
          <strong className="text-secondary">Cylinders:</strong>
          <br />
            "Gorilla“ GC Cylinders (26-70T), "Double-Acting" D/A Cylinders, "Wombat” Bottom Lift Hoists (5–24T),
            “Emu” Underbody Hoists (2–13T), “Goanna” Top Lift Low Friction Hoists (3–60T).
        </p>

        <p>
          <strong className="text-secondary">Hydraulic Components:</strong>
          <br />
          We offer a variety of pumps, valves, fittings, and power take-offs
          (PTOs) designed to enhance vehicle and machinery performance.
        </p>

        <p>
          <strong className="text-secondary">Pneumatic Accessories:</strong>
          <br />
          Items such as air cab controls and control valves to support hydraulic systems.
        </p>

        <p>
          All products come with a 12-month warranty, and we actively use
          customer feedback to continually improve our offerings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-primary">
          Our Locations
        </h2>

        <p>
          Hoist Hydraulics has multiple branches located across Australia. Each
          branch is equipped with knowledgeable staff who are ready to assist
          with any sales inquiries, provide expert advice, and offer tailored
          solutions. Whether you require product selection guidance, custom
          hydraulic systems, or maintenance and upgrade support, our experienced
          team is here to help.
        </p>

        <ul className="list-disc list-inside mt-4">
          <li className="text-secondary font-semibold hover:underline cursor-pointer">
            <Link href="/sales-service#victoria">Hoist Hydraulics Melbourne (Head Office)</Link>
          </li>
          <li className="text-secondary font-semibold hover:underline cursor-pointer">
            <Link href="/sales-service#queensland">Hoist Hydraulics Brisbane</Link>
          </li>
          <li className="text-secondary font-semibold hover:underline cursor-pointer">
            <Link href="/sales-service#southaustralia">Hoist Hydraulics Adelaide</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Company;
