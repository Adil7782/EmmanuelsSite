import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiMonitor, FiBarChart2, FiAlertTriangle, FiSettings } from 'react-icons/fi';

const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    {
      icon: <FiMonitor className="text-4xl text-blue-600" />,
      title: "About ELIoT DPM",
      description: "ELIoT is a smart, scalable IoT solution built for garment factories to enhance both machine and operator performance. It enables real-time production tracking, efficiency monitoring, and actionable insights from the shop floor. Designed for easy integration and cost-effectiveness, ELIoT helps manufacturers embrace Industry 4.0 with minimal disruption—driving transparency, productivity, and long-term operational excellence.",
      features: [
        "30+ industrial-grade widgets",
        "Custom visualization tools",
        "Role-based access control",
        "Multi-tenant support"
      ],
      image: "/portal.jpg",
      imageAlt: "Industrial IoT dashboard showing real-time metrics"
    },
    {
      icon: <FiBarChart2 className="text-4xl text-blue-600" />,
      title: "Eliot RFID",
      description: "Transform raw production data into actionable insights with our AI-powered analytics platform. Optimize equipment performance and reduce downtime with predictive maintenance algorithms.",
      features: [
        "Production trend analysis",
        "OEE (Overall Equipment Effectiveness)",
        "Predictive maintenance scoring",
        "Automated reporting"
      ],
      image: "/rfid.png",
      imageAlt: "Manufacturing analytics platform interface"
    },
    {
      icon: <FiAlertTriangle className="text-4xl text-blue-600" />,
      title: "Industrial Alert Management",
      description: "Get notified immediately when equipment parameters deviate from normal ranges. Our system supports multi-channel alerts with escalation policies for critical situations.",
      features: [
        "Threshold-based alerts",
        "SMS/Email/App notifications",
        "Alert acknowledgement workflows",
        "Root cause analysis tools"
      ],
      image: "/images/alerts-screenshot.png",
      imageAlt: "Alert management console with notifications"
    },
    {
      icon: <FiSettings className="text-4xl text-blue-600" />,
      title: "Automation Control System",
      description: "Remotely monitor and control your industrial equipment with our secure automation platform. Supports PLCs, sensors, and legacy manufacturing systems.",
      features: [
        "Remote equipment control",
        "Batch process automation",
        "Equipment scheduling",
        "Safety interlocks"
      ],
      image: "/images/automation-screenshot.png",
      imageAlt: "Industrial automation control panel"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Industrial IoT Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools for manufacturing digitization and automation
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Navigation */}
          <div className="flex justify-between items-center mb-8">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Previous slide"
            >
              <FiArrowLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Next slide"
            >
              <FiArrowRight size={20} />
            </button>
          </div>

          {/* Carousel Content */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <div className="flex flex-col lg:flex-row">
              {/* Text Content */}
              <div className="w-full lg:w-1/2 p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-full mr-4">
                    {products[activeIndex].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {products[activeIndex].title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {products[activeIndex].description}
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                  {products[activeIndex].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                    Learn More
                  </button>
                  <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-md transition duration-300">
                    Request Demo
                  </button>
                </div> */}
              </div>
              
              {/* Image Content */}
              <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-4">
                <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                  <img 
                    src={products[activeIndex].image} 
                    alt={products[activeIndex].imageAlt}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                  />
                  <div className="absolute inset-0 border-[12px] border-transparent pointer-events-none" 
                       style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;