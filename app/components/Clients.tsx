
import React, { useEffect } from 'react'


import AOS from 'aos';
import 'aos/dist/aos.css';  
import Image from 'next/image';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Shape from './Shape';





const Clients = () => {

  
useEffect(() => {  
  AOS.init();  
}, []);  


  return (
    <div className='h-full'>
    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200"   className='h-[180px] mt-24'>
      <div className='container flex flex-col bg-slate-900 h-36   mt-12 '>
      <div className=' flex justify-center items-center font-bold text-3xl text-white mb-9 mt-4'>
      <Shape/>
      Our Clients
      <Shape/>
      </div>
      <div className='flex gap-8 justify-evenly  flex-row '>
      
      <Image src="/img/clients/client-1.png" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="150" alt="Picture of the author" height={100} width={100} />
      <Image src="/img/clients/client-2.png" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="150" alt="Picture of the author" height={100} width={100} />
      <Image src="/img/clients/client-3.png" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="150" alt="Picture of the author" height={100} width={100} />
      <Image src="/img/clients/client-4.png" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="150" alt="Picture of the author" height={100} width={100} />
      <Image src="/img/clients/client-5.png" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="150" alt="Picture of the author" height={100} width={100} />
      <Image src="/img/clients/client-6.png" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="150" alt="Picture of the author" height={100} width={100} />
      </div>
      </div>  
    </div>
    </div>
  )
}

export default Clients