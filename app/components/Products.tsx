import { FiCpu, FiCloud, FiServer, FiCode, FiDatabase, FiLayers } from 'react-icons/fi';

const ProductEcosystem = () => {
  const products = [
    {
      icon: <FiCpu className="text-4xl text-blue-600" />,
      title: "Overall Productivity",
      description: " ",
      link: "/products/el-edge",
      badge: "EDGE"
    },
    {
      icon: <FiCloud className="text-4xl text-blue-600" />,
      title: "Real-Time Decision Making",
      description: " ",
      link: "/products/el-cloud",
      badge: "CLOUD"
    },
    {
      icon: <FiServer className="text-4xl text-blue-600" />,
      title: "Process Accuracy",
      description: " ",
      link: "/products/el-server",
      badge: "ON-PREM"
    },
    {
      icon: <FiCode className="text-4xl text-blue-600" />,
      title: "labour quality",
      description: " ",
      link: "/products/el-studio",
      badge: "DEV TOOL"
    },
    {
      icon: <FiDatabase className="text-4xl text-blue-600" />,
      title: "Machine Utilization",
      description: " ",
      link: "/products/el-analytics",
      badge: "ANALYTICS"
    },
    {
      icon: <FiLayers className="text-4xl text-blue-600" />,
      title: "Reduce cost of supervision",
      description: " ",
      link: "/products/el-integrations",
      badge: "CONNECTORS"
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Emmanuel's Lanka Solutions Improve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive suite of industrial automation products that work seamlessly together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {product.badge}
              </div>
              <div className="mb-6">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              <a 
                href={product.link} 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Learn more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-100 rounded-full px-6 py-2">
            <span className="text-gray-700 font-medium">All products integrate seamlessly with each other</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductEcosystem;