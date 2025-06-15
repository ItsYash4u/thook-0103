
import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-black text-black">THOOK</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">MEN</a>
            <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">WOMEN</a>
            <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">ACCESSORIES</a>
            <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">PLUS SIZE</a>
          </nav>
          
          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-900">
              Search
            </Button>
            <Button variant="ghost" className="text-gray-900">
              Login
            </Button>
            <Button variant="ghost" className="text-gray-900">
              Cart
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
