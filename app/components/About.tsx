import React, { useEffect } from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css';  
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Shape from './Shape';


const About = () => {

    useEffect(() => {  
      Aos.init();  
    }, []);  
    
  return (
    <div
    
      className="h-screen bg-black  mb-12 overflow-hidden "
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="200"
      
      
    >
      <div className="flex justify-center items-center font-bold text-3xl text-slate-300 mb-9 mt-4">
        <Shape /> About us
        <Shape />
      </div>
      <div className="flex mx-16 text-slate-300  gap-4 ">
        <div className="w-1/2">
          <p
            className="mb-4 "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="150"
          >
            Our team of experienced consultants and engineers across wide
            disciplines get together to built our reputation on giving our
            customers straightforward, practical, technical advice and recommend
            products & Solutions that work together to meet their needs.
          </p>
          <p
            className="mb-4 "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="150"
          >
            Innovative Products and management tools for the Retail indutry, RMG
            industry & poultry industry based on scientific self-learning
            algorithms, using your enterprise data to further improve and
            optimize your production and business process.
          </p>
        </div>
        <div className="w-1/2">
          <p
            className="mb-4 "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="150"
          >
            They are designed to support managers in taking proper decisions
            concerning their daily business, as well as the strategic decisions
            they are facing.
          </p>
          <p
            className="mb-4 "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="150"
          >
            Having access to accurate analyzed data opens new perspectives for
            R&D Managers to develop new innovative or improve existing products
            or processes.
          </p>
          <p
            className="mb-4 "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="150"
          >
            Emmanuel’s Lanka is an industrial equipment design & development R&D
            firm established in the year 2009 engaged in developing innovative
            products and solutions to Sri Lankan based manufacturing segments in
            the field of IOT, Digitization and Industrial automation solutions &
            smart Products.
          </p>
        </div>
      </div>
      <div className="flex mt-12 gap-4 text-slate-300 mx-16 ">
      <div
    className="w-1/2 rounded-lg overflow-hidden" // Added overflow-hidden to ensure the rounded corners are applied
    data-aos="fade-right"
    data-aos-duration="1500"
    data-aos-delay="200"
  >
    <AspectRatio className='rounded-xl' ratio={16 / 9}>
      <Image 
        src="/success.jpg" 
        alt="Picture of the author" 
        fill 
        className="rounded-lg object-cover" // Added rounded-lg and object-cover
      />
    </AspectRatio>
  </div>

        <div
          className="w-1/2 "
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          <div className="flex gap-7 text-slate-400">
            <div className="flex flex-col justify-items-center ">
              <p className="m-4 text-sm">
                <b>Happy Clients</b> We provide our R&D services to cutting edge
                level with the latest technological designs.
              </p>
              <p className="m-4 text-sm">
                <b>Awards</b> We have received several National & International
                awards for our R&D works in the area of IoT & Digitization
                solutions from Global Climate Launch Pad compitition etc
              </p>
              <p className="m-4 text-sm">
                <b>Established On</b> We were established in the year 2009 and
                continue to provide our R&D services to our prestigeous clients
                world wide.
              </p>
            </div>
            <div className="1/2">
              <p className="m-4 text-sm">
                <b>Projects</b> We work with various clients to develop their
                products & solutions. We have developed cutting edge technology
                robotics machines and equipment.
              </p>
              <p className="m-4 text-sm">
                <b>Team Members</b> We have engineers from Electronics & IoT
                Design, Electrical & Power Engineering, Mechanical Design &
                Sofware Design professions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About