
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {  
        AOS.init();  
      }, []);  

  return (
    <div  id="home" className="relative h-screen">
      {/* Background Image */}
      <Image
        src="/indexnew.png"
        layout="fill"
        objectFit="cover"
        alt="hero"
        className="filter brightness-20"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black space-y-4 z-10">
     <div className='flex flex-col items-center justify-center space-y-4 '>
      <div className='w-[700px]'>
      {/* <TextGenerateEffect className='text-slate-900' filter words={"Start your new digital experience with ELIoT"} /> */}
      </div>
      <div className=' flex justify-center items-center font-bold text-xl text-black mb-9 mt-4'>
     <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
     <TextGenerateEffect className='text-slate-900' filter words={"Start your new digital experience with ELIoT"} />We are a team of making web based solutions</h1>
        </div>
     </div>
      </div>
    </div>
  );
};

export default Hero;