import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4 relative">
              F<span className="text-lg absolute -bottom-1 right-2 text-white">3</span> Fitness
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Transform your body, transform your life. Join our community of fitness enthusiasts and discover your strongest self.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">📘 Facebook</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">📷 Instagram</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">🐦 Twitter</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-primary transition-colors duration-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors duration-300">Programs</Link></li>
              <li><Link to="/membership" className="hover:text-primary transition-colors duration-300">Membership</Link></li>
              <li><Link to="/trainers" className="hover:text-primary transition-colors duration-300">Trainers</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="text-gray-300 space-y-2">
              <p>1234 Fitness Boulevard</p>
              <p>Metro City, MC 12345</p>
              <p>(555) 123-4567</p>
              <p>info@f3fitness.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 <span className="text-primary font-bold relative">F<span className="text-sm absolute -bottom-1 right-2 text-white">3</span></span> Fitness. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
