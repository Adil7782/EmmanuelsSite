import Link from 'next/link';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <img 
                src="/EMLlogo.png" 
                alt="Emmanuel's Lanka Logo" 
                className="h-8 mr-2"
              />
              Emmanuel's Lanka
            </h3>
            <p className="text-gray-300 mb-4">
              Industrial equipment R&D firm specializing in IoT, digitization, and automation solutions since 2009.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/iot" className="text-gray-300 hover:text-white transition">
                  IoT Platforms
                </Link>
              </li>
              <li>
                <Link href="/solutions/automation" className="text-gray-300 hover:text-white transition">
                  Industrial Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions/smart-products" className="text-gray-300 hover:text-white transition">
                  Smart Product Design
                </Link>
              </li>
              <li>
                <Link href="/solutions/digitization" className="text-gray-300 hover:text-white transition">
                  Manufacturing Digitization
                </Link>
              </li>
              <li>
                <Link href="/solutions/data-analytics" className="text-gray-300 hover:text-white transition">
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Industries</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/industries/rmg" className="text-gray-300 hover:text-white transition">
                  Apparel (RMG)
                </Link>
              </li>
              <li>
                <Link href="/industries/poultry" className="text-gray-300 hover:text-white transition">
                  Poultry & Agriculture
                </Link>
              </li>
              <li>
                <Link href="/industries/retail" className="text-gray-300 hover:text-white transition">
                  Retail & Distribution
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="text-gray-300 hover:text-white transition">
                  General Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Industrial Zone, Colombo 10, Sri Lanka
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-gray-400" />
                <span className="text-gray-300">+94 11 234 5678</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-gray-400" />
                <a href="mailto:info@emmanuelslanka.com" className="text-gray-300 hover:text-white transition">
                  info@emmanuelslanka.com
                </a>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-3 text-gray-400" />
                <span className="text-gray-300">Mon-Fri: 8:30 AM - 5:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Emmanuel's Lanka (Pvt) Ltd. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;