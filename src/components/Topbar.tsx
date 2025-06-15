
import React from "react";

const Topbar = () => {
  return (
    <div className="w-full bg-[#ececec] h-8">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-8 text-xs text-gray-700">
        {/* Left links */}
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Offers</a>
          <a href="#" className="hover:underline">Fanbook</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hidden md:inline hover:underline">📱 Download App</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hidden md:inline hover:underline">Find a store near me</a>
        </div>
        {/* Right links */}
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Track Order</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
