import React from "react";

const Branches: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <section id="victoria" className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex-1 md: mb-10">
          <div className="mb-10">
            <h2 className="text-4xl text-primary font-bold mb-2">Victoria</h2>
            <h3 className="text-md text-secondary font-bold">Head Office</h3>
          </div>
          <ul className="space-y-5">
            <li>
              <strong className="text-primary">Address: </strong>
              874 Mountain Highway, Bayswater, Victoria 3153
            </li>
            <li>
              <strong className="text-primary">Phone: </strong>
              (03) 9728 1888
            </li>
            <li>
              <strong className="text-primary">Email: </strong>
              sales@hoist.net
            </li>
          </ul>
        </div>
        <div className="flex-1 w-full md:w-auto h-32 md:h-64">
          <iframe
            title="874 Mountain Highway, Bayswater, Victoria"
            src="https://www.google.com/maps?q=874+Mountain+Highway,+Bayswater,+Victoria&output=embed"
            className="w-full h-full border-0 shadow-xl"
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <hr className="border-secondary" />
      <section id="southaustralia" className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex-1 md: mb-10">
          <div className="mb-10">
            <h2 className="text-4xl text-primary font-bold mb-2">South Australia</h2>
          </div>
          <ul className="space-y-5">
            <li>
              <strong className="text-primary">Address: </strong>
              Corner Cross Keys Road &amp; CB Fisher Drive, Cavan, SA, 5094
            </li>
            <li>
              <strong className="text-primary">Phone: </strong>
              (08) 8359 8883
            </li>
            <li>
              <strong className="text-primary">Email: </strong>
              hhsa@hoist.net
            </li>
          </ul>
        </div>
        <div className="flex-1 w-full md:w-auto h-32 md:h-64">
          <iframe
            title="Corner Cross Keys Road & CB Fisher Drive, Cavan, SA, 5094"
            src="https://www.google.com/maps?q=Corner+Cross+Keys+Road+%26+CB+Fisher+Drive,+Cavan,+SA,+5094&output=embed"
            className="w-full h-full border-0 shadow-xl"
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <hr className="border-secondary" />
      <section id="queensland" className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex-1 md: mb-10">
          <div className="mb-10">
            <h2 className="text-4xl text-primary font-bold mb-2">Queensland</h2>
          </div>
          <ul className="space-y-5">
            <li>
              <strong className="text-primary">Address: </strong>
              12 Blivest Street, Oxley, Queensland, 4075
            </li>
            <li>
              <strong className="text-primary">Phone: </strong>
              (07) 3217 0500
            </li>
            <li>
              <strong className="text-primary">Email: </strong>
              hhqld@hoist.net
            </li>
          </ul>
        </div>
        <div className="flex-1 w-full md:w-auto h-32 md:h-64">
          <iframe
            title="12 Blivest Street, Oxley, Queensland, 4075"
            src="https://www.google.com/maps?q=12+Blivest+Street,+Oxley,+Queensland,+4075&output=embed"
            className="w-full h-full border-0 shadow-xl"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Branches;
