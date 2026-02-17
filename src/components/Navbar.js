import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-4xl font-bold text-primary relative">
                F<span className="text-lg absolute -bottom-1 right-2 text-white">3</span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-white hover:text-primary transition-colors duration-300">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-primary transition-colors duration-300">About</Link>
              <Link to="/services" className="text-gray-300 hover:text-primary transition-colors duration-300">Services</Link>
              <Link to="/membership" className="text-gray-300 hover:text-primary transition-colors duration-300">Membership</Link>
              <Link to="/trainers" className="text-gray-300 hover:text-primary transition-colors duration-300">Trainers</Link>
              <Link to="/testimonials" className="text-gray-300 hover:text-primary transition-colors duration-300">Reviews</Link>
              <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors duration-300">Contact</Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={closeMobileMenu} className="block px-3 py-2 text-white hover:text-primary transition-colors duration-300">Home</Link>
            <Link to="/about" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors duration-300">About</Link>
            <Link to="/services" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors duration-300">Services</Link>
            <Link to="/membership" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors duration-300">Membership</Link>
            <Link to="/trainers" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors duration-300">Trainers</Link>
            <Link to="/testimonials" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors duration-300">Reviews</Link>
            <Link to="/contact" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors duration-300">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
