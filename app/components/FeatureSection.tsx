import { FiCpu, FiDatabase, FiPieChart, FiShield, FiCode, FiCloud, FiBarChart2, FiSettings } from 'react-icons/fi';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiCpu className="text-3xl text-blue-600" />,
      title: "Industrial IoT Solutions",
      description: "End-to-end IoT platforms for manufacturing equipment monitoring and predictive maintenance."
    },
    {
      icon: <FiDatabase className="text-3xl text-blue-600" />,
      title: "Data Collection & Processing",
      description: "Real-time data collection from diverse industrial sources with advanced processing capabilities."
    },
    {
      icon: <FiPieChart className="text-3xl text-blue-600" />,
      title: "Smart Analytics",
      description: "AI-powered analytics to optimize production processes and reduce operational costs."
    },
    {
      icon: <FiShield className="text-3xl text-blue-600" />,
      title: "Enterprise Security",
      description: "Military-grade security protocols to protect your industrial data and operations."
    },
    {
      icon: <FiCode className="text-3xl text-blue-600" />,
      title: "Custom Development",
      description: "Tailored solutions designed specifically for your manufacturing challenges."
    },
    {
      icon: <FiCloud className="text-3xl text-blue-600" />,
      title: "Cloud & On-Premise",
      description: "Flexible deployment options to meet your infrastructure requirements."
    },
    {
      icon: <FiBarChart2 className="text-3xl text-blue-600" />,
      title: "Performance Monitoring",
      description: "Comprehensive dashboards for real-time monitoring of production KPIs."
    },
    {
      icon: <FiSettings className="text-3xl text-blue-600" />,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to improve efficiency."
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Industrial IoT & Automation Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for manufacturing digitization, equipment monitoring, and process optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 inline-flex items-center">
            Explore All Features
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;