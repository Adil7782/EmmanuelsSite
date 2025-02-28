"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect } from 'react';

export function CardDemo() {


  const services = [
    {
      src: "/hero-bg.jpg",
      title: "Industrial Robotics",
      description:
        "IoT enabled industrial robotics machines are one of the major areas we have been working on",
      
      delay: 100,
    },
    {
      src: "/img/services-3.jpg",
      title: "Digitization",
      description:
        "We provide modern and well developed digitization support to top apperel industries",
      
      delay: 100,
    },
    {
      src: "/img/services-4.jpg",
      title: "Research & Development",
      description:
        "We innovate new and modern ways to develop solutions for your problems by doing a broad survey.",
      
      delay: 100,
    },
  ]




  return (
  <div className="ml-16 mb-12" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
   <div className=" justify-center items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
    {
      services.map((s,i) => {
        return (
          <div key={i} className="max-w-xs w-full group/card">
            <div
              className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
              style={{
                backgroundImage: `url(${s.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-40"></div>
              <div className="flex flex-row items-center space-x-4 z-10"></div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl p-2 text-gray-50 relative z-10">
                  {s.title}
                </h1>
                <div className="bg-slate-400 bg-opacity-40 backdrop-blur-md h-18 rounded-xl p-2">
                  <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                    {s.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })
    }
   </div>
  </div>
  );
}
