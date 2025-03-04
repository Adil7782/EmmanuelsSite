// import { useEffect } from "react";
// import Image from "next/image";
// import "glightbox/dist/css/glightbox.min.css";
// import GLightbox from "glightbox";
// import Isotope from "isotope-layout";

// const PortfolioGrid = () => {
//   useEffect(() => {
//     // Initialize GLightbox for gallery
//     GLightbox({
//       selector: ".glightbox",
//     });

//     // Initialize Isotope for filtering
//     const iso = new Isotope(".isotope-container", {
//       itemSelector: ".isotope-item",
//       layoutMode: "masonry",
//     });

//     // Filter items on button click
//     const filters = document.querySelectorAll(".portfolio-filters li");
//     filters.forEach((filter) => {
//       filter.addEventListener("click", () => {
//         const filterValue = filter.getAttribute("data-filter") || "*"; // Provide default value
//         iso.arrange({ filter: filterValue });
//         filters.forEach((f) => f.classList.remove("filter-active"));
//         filter.classList.add("filter-active");
//       });
//     });
//   }, []);

//   return (
//     <div className="">
//     <div className="container  bg-white h-full px-20">
//       <div
//         className="isotope-layout "
//         data-default-filter="*"
//         data-layout="masonry"
//         data-sort="original-order"
//       >
//         {/* Portfolio Filters */}
//         <ul
//           className="portfolio-filters isotope-filters flex justify-center space-x-4 py-4"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           <li data-filter="*" className="filter-active cursor-pointer">
//             All
//           </li>
//           <li data-filter=".filter-jetson" className="cursor-pointer">Jetson Ai</li>
//           <li data-filter=".filter-solar" className="cursor-pointer">Solar Project</li>
//           <li data-filter=".filter-vendor_machine" className="cursor-pointer">Vender Machine</li>
//           <li data-filter=".filter-print" className="cursor-pointer">Printing Machine</li>
//         </ul>

//         {/* Portfolio Items */}
//         <div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 isotope-container"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           {/* Example Portfolio Item */}
//           {portfolioItems.map((item, index) => (
//             <div
//               key={index}
//               className={`portfolio-item isotope-item ${item.filter} ml-10`}
//             >
//               <div className="portfolio-content">
//                 <a
//                   href={item.image}
//                   data-gallery={`portfolio-gallery-${item.filter}`}
//                   className="glightbox"
//                 >
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     className="img-fluid w-full h-auto"
//                     width={500/2}
//                     height={500/2}
//                   />
//                 </a>
//                 <div className="portfolio-info p-4">
//                   <h4>
//                     <a href="portfolio-details.html" title="More Details">
//                       {item.title}
//                     </a>
//                   </h4>
//                   <p>{item.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// // Portfolio Items Data
// const portfolioItems = [
//   {
//     filter: "filter-jetson",
//     image: "/img/portfolio/jetsonai-1.jpg",
//     title: "App 1",
//     description: "Lorem ipsum, dolor sit amet consectetur",
//   },
//   {
//     filter: "filter-jetson",
//     image: "/img/portfolio/jetsonai-2.jpg",
//     title: "App 1",
//     description: "Lorem ipsum, dolor sit amet consectetur",
//   },
//   {
//     filter: "filter-solar",
//     image: "/img/portfolio/solar-1.jpg",
//     title: "App 1",
//     description: "Lorem ipsum, dolor sit amet consectetur",
//   },
//   {
//     filter: "filter-solar",
//     image: "/img/portfolio/solar-2.jpg",
//     title: "App 1",
//     description: "Lorem ipsum, dolor sit amet consectetur",
//   },
//   {
//     filter: "filter-solar",
//     image: "/img/portfolio/solar-3.jpg",
//     title: "App 1",
//     description: "Lorem ipsum, dolor sit amet consectetur",
//   },
//   {
//     filter: "filter-vendor_machine",
//     image: "/img/portfolio/vendor_machine-1.jpg",
//     title: "Product 1",
//     description: "Lorem ipsum, dolor sit amet consectetur",
//   },
//   {
//     filter: "filter-vendor_machine",
//     image: "/img/portfolio/vendor_machine-3.jpg",
//     title: "Product 1",
//     description: "Lorem ipsum, dolor sit amet consectetur",
//   },
//   {
//     filter: "filter-vendor_machine",
//     image: "/img/portfolio/vendor_machine-2.jpg",
//     title: "Product 1",
//     description: "Lorem ipsum, dolor sit amet consectetur",
//   },
//   {
//     filter: "filter-print",
//     image: "/img/portfolio/print-1.jpg",
//     title: "Product 1",
//     description: "Lorem ipsum, dolor sit amet consectetur",
//   },
//   {
//     filter: "filter-print",
//     image: "/img/portfolio/print-2.jpg",
//     title: "Product 1",
//     description: "Lorem ipsum, dolor sit amet consectetur",
//   },
//   {
//     filter: "filter-print",
//     image: "/img/portfolio/print-5.jpg",
//     title: "Product 1",
//     description: "Lorem ipsum, dolor sit amet consectetur",
//   },
//   {
//     filter: "filter-print",
//     image: "/img/portfolio/print-6.jpg",
//     title: "Product 1",
//     description: "Lorem ipsum, dolor sit amet consectetur",
//   },
 
 
 
//   // Add more items here as needed
// ];

// export default PortfolioGrid;