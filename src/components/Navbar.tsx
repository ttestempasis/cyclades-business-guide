
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-display font-bold text-cyclades-blue-dark">
            Cyclades <span className="text-cyclades-blue">Directory</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-700 hover:text-cyclades-blue-dark">
            Home
          </Link>
          <Link to="/search" className="text-gray-700 hover:text-cyclades-blue-dark">
            Businesses
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-cyclades-blue-dark">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-cyclades-blue-dark">
            Contact
          </Link>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" asChild>
              <Link to="/business-login">Business Login</Link>
            </Button>
            <Button className="bg-cyclades-blue-dark hover:bg-cyclades-blue">
              Register Business
            </Button>
          </div>

          <div className="flex border border-gray-200 rounded">
            <button className="px-2 py-1 text-sm border-r border-gray-200">EN</button>
            <button className="px-2 py-1 text-sm">EL</button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute top-16 left-0 w-full shadow-md z-50 animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-cyclades-blue-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/search"
              className="text-gray-700 hover:text-cyclades-blue-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Businesses
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-cyclades-blue-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-cyclades-blue-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" asChild>
                <Link to="/business-login" onClick={() => setIsMenuOpen(false)}>
                  Business Login
                </Link>
              </Button>
              <Button className="bg-cyclades-blue-dark hover:bg-cyclades-blue">
                Register Business
              </Button>
            </div>
            <div className="flex border border-gray-200 rounded self-start mt-2">
              <button className="px-3 py-1 text-sm border-r border-gray-200">EN</button>
              <button className="px-3 py-1 text-sm">EL</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
