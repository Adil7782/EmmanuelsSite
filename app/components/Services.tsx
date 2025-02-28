import React from "react";
import Shape from "./Shape";

const services = [
  {
    icon: "bi bi-briefcase",
    title: "Industrial Automation",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    link: "service-details.html",
    delay: 100,
  },
  {
    icon: "bi bi-card-checklist",
    title: "Industrial IOT",
    description:
      "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa",
    link: "service-details.html",
    delay: 200,
  },
  {
    icon: "bi bi-card-checklist",
    title: " IOT",
    description:
      "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa",
    link: "service-details.html",
    delay: 300,
  },
  {
    icon: "bi bi-bar-chart",
    title: "Research & Development",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    link: "service-details.html",
    delay: 400,
  },
  {
    icon: "bi bi-binoculars",
    title: "Electronic Designing",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    link: "service-details.html",
    delay: 500,
  },
  {
    icon: "bi bi-brightness-high",
    title: "Software Designing",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praese",
    link: "service-details.html",
    delay: 600,
  },
  {
    icon: "bi bi-calendar4-week",
    title: "Data Based Management",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio dasa fermo lind saca",
    link: "service-details.html",
    delay: 700,
  },
  {
    icon: "bi bi-calendar4-week",
    title: "Embedded Systems Development",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio dasa fermo lind saca",
    link: "service-details.html",
    delay: 800,
  },
  {
    icon: "bi bi-calendar4-week",
    title: "Artificial Intelligence",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio dasa fermo lind saca",
    link: "service-details.html",
    delay: 900,
  },
  {
    icon: "bi bi-calendar4-week",
    title: "UX/UI Designing",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio dasa fermo lind saca",
    link: "service-details.html",
    delay: 1000,
  },
  {
    icon: "bi bi-calendar4-week",
    title: "Web Development",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio dasa fermo lind saca",
    link: "service-details.html",
    delay: 1100,
  },
  {
    icon: "bi bi-calendar4-week",
    title: "Robotic Development",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio dasa fermo lind saca",
    link: "service-details.html",
    delay: 1200,
  },
];

export default function ServicesGrid() {
  return (
   <div className="container mx-auto py-10  ">
    <div   data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="200"
       className="flex justify-center items-center font-bold text-3xl text-slate-300 mb-4 mt-4">
        <Shape /> Our Experties
        <Shape />
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mx-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex items-start p-2 bg-white shadow-md rounded-lg transition hover:shadow-lg"
          data-aos="fade-up"
          data-aos-delay={service.delay}
          data-aos-duration="1500"
        >
          <div className="text-blue-600 text-3xl flex-shrink-0 mr-4">
            <i className={service.icon}></i>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">
              <a
                href={service.link}
                className="text-gray-900 hover:text-blue-600 transition"
              >
                {service.title}
              </a>
            </h4>
            <p className="text-gray-700">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
}
