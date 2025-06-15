
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black mb-4">THOOK</h3>
            <p className="text-gray-400 text-sm">
              Step into the world of iconic pop culture, superhero, and cartoon fashion.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 uppercase">SHOP</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Men</a></li>
              <li><a href="#" className="hover:text-white">Women</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
              <li><a href="#" className="hover:text-white">Plus Size</a></li>
            </ul>
          </div>
          
          {/* Customer Care */}
          <div>
            <h4 className="font-bold mb-4 uppercase">CUSTOMER CARE</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Size Guide</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 uppercase">COMPANY</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 THOOK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
