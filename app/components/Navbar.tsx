import { useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect } from 'react';


    

const Navbar = () => {
    useEffect(() => {  
        AOS.init();  
      }, []);  
  const [active, setActive] = useState("Home");

  const handleScroll = (id: string) => {
    setActive(id);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Pricing",
    "Team",
    "Dropdown",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-70 text-white shadow-md z-50"
    data-aos="fade-down" data-aos-duration="1500" data-aos-delay="100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">ELIoT</div>
        {/* Menu */}
        <ul className="flex space-x-8">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => handleScroll(item)}
              className={`cursor-pointer ${
                active === item ? "text-green-500" : "hover:text-green-300"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
