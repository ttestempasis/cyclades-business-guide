
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cyclades-blue-dark text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display font-bold text-xl mb-4">Cyclades Directory</h3>
            <p className="text-sm text-gray-300 mb-4">
              A digital business ecosystem initiated by the Cyclades Chamber of Commerce.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/search" className="text-sm text-gray-300 hover:text-white">Business Directory</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Businesses</h4>
            <ul className="space-y-2">
              <li><Link to="/business-login" className="text-sm text-gray-300 hover:text-white">Business Login</Link></li>
              <li><Link to="/register" className="text-sm text-gray-300 hover:text-white">Register Your Business</Link></li>
              <li><Link to="/aegean-cuisine" className="text-sm text-gray-300 hover:text-white">Aegean Cuisine Program</Link></li>
              <li><Link to="/certifications" className="text-sm text-gray-300 hover:text-white">Certifications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>Cyclades Chamber of Commerce</p>
              <p>Apollonos 5, Ermoupoli</p>
              <p>Syros, 84100, Greece</p>
              <p className="pt-2">
                <a href="tel:+30 22810 82346" className="hover:text-white">+30 22810 82346</a>
              </p>
              <p>
                <a href="mailto:info@e-kyklades.gr" className="hover:text-white">info@e-kyklades.gr</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Cyclades Chamber of Commerce. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
