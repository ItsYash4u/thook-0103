
import React from "react";

// Simple stylized t-shirt printing animation
const LoadingTShirt: React.FC = () => (
  <div className="flex flex-col items-center px-4 py-6">
    <div className="relative w-20 h-16 flex justify-center">
      {/* T-shirt shape */}
      <svg viewBox="0 0 64 52" width="64" height="52" className="drop-shadow-md">
        <g>
          {/* Shirt body */}
          <rect x="18" y="15" width="28" height="30" rx="6" fill="#fffde4" stroke="#ffd600" strokeWidth="2"/>
          {/* Sleeves */}
          <rect x="5" y="12" width="15" height="11" rx="3" fill="#fffde4" stroke="#ffd600" strokeWidth="2"/>
          <rect x="43" y="12" width="16" height="11" rx="3" fill="#fffde4" stroke="#ffd600" strokeWidth="2"/>
          {/* Collar */}
          <ellipse cx="32" cy="16" rx="6" ry="3.2" fill="#ffd600" />
        </g>
      </svg>
      {/* Printer animation */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/3">
        <div className="w-10 h-4 bg-gray-200 rounded-full shadow" />
        {/* Printing bar */}
        <div className="w-[0.15rem] h-7 bg-[#ffd600] rounded-full absolute left-1/2 -translate-x-1/2 top-[10%] animate-print-lane" />
      </div>
      <style>
        {`
        @keyframes print-lane {
          0% { height: 0.15rem; opacity: 0.7; }
          18% { opacity: 0.7; }
          35% { opacity: 1; }
          85% { height: 1.8rem; opacity: 1; }
          100% { height: 2.1rem; opacity: 0; }
        }
        .animate-print-lane {
          animation: print-lane 1.05s cubic-bezier(.62,.05,.63,.98) infinite;
        }
        `}
      </style>
    </div>
    <span className="mt-6 font-black text-black tracking-widest text-sm animate-pulse">Printing...</span>
  </div>
);

export default LoadingTShirt;
