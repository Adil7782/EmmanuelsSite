"use client"
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Partners from "./components/Partners";
import { FeaturesSectionDemo } from "./components/Features";
import ParallaxScrolling from "./components/Parallax";
import ServicesGrid from "./components/Services";
import { CardDemo } from "./components/CardDemo";
// import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import CountdownTimer from "./components/timer";
import OurStory from "./components/story";




export default function Home() {
  return (
  <>
  <div className="bg-black">
  <Navbar/>
  <Hero/>
  <About/>
  <Partners/>
  <FeaturesSectionDemo />
  <ServicesGrid/>
  <CardDemo/>
 
  {/* <Portfolio/> */}
  <Clients/>
  <ParallaxScrolling />
  <Clients/>

  </div>
  </>
  );
}
