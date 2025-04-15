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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.918113775729!2d145.27674597498847!3d-37.83880283546803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63b605c5606b9%3A0x1b634fc3d3a478a1!2sHoist%20Hydraulics%20VIC%20PTY%20Ltd!5e0!3m2!1sen!2sus!4v1744697196398!5m2!1sen!2sus"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.362620470059!2d138.59886977380677!3d-34.82197420909335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0b64ea1fa85cb%3A0x4b2ca10564949c77!2sHoist%20Hydraulics%20SA%20PTY%20Ltd!5e0!3m2!1sen!2sus!4v1744697146396!5m2!1sen!2sus"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8979831184906!2d152.96969307440003!3d-27.56567642080049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b914fb412ec3f0b%3A0x1623d0201caa933f!2sHoist%20Hydraulics%20QLD%20PTY%20Ltd.!5e0!3m2!1sen!2sau!4v1744696996597!5m2!1sen!2sau"
            className="w-full h-full border-0 shadow-xl"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Branches;
