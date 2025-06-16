import React from "react";
import HeroCard from "./HeroCard";
import { Link } from "react-router-dom";

// Custom yellow grid background SVG as base64
const yellowGridBg = `url('data:image/svg+xml;utf8,<svg width="100%" height="100%" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="700" fill="url(%23a)" /><defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(135 0.5 0.5)"><stop offset="0" stop-color="%23fffde4"/><stop offset="1" stop-color="%23ffd600"/></linearGradient></defs><g stroke="%23fff7bc" stroke-width="3" opacity="0.6"><path d="M0 100h1200"/><path d="M0 200h1200"/><path d="M0 300h1200"/><path d="M0 400h1200"/><path d="M0 500h1200"/><path d="M0 600h1200"/><path d="M0 700h1200"/><path d="M100 0v700"/><path d="M200 0v700"/><path d="M300 0v700"/><path d="M400 0v700"/><path d="M500 0v700"/><path d="M600 0v700"/><path d="M700 0v700"/><path d="M800 0v700"/><path d="M900 0v700"/><path d="M1000 0v700"/><path d="M1100 0v700"/></g></svg>')`;

// MEN image for the card
const menImg = "https://t3.ftcdn.net/jpg/06/57/49/32/240_F_657493201_YFfoGwIqaAFI42aibCDnwTxbBUYWI67g.jpg";

// BG image for half-hero
const halfBgImg = "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80";
const Hero: React.FC = () => <section className="relative overflow-hidden min-h-[670px] flex flex-col justify-start items-center" style={{
  backgroundImage: yellowGridBg,
  backgroundSize: "cover",
  backgroundPosition: "center",
  boxShadow: "inset 0 -40px 60px -10px rgba(255,214,0,0.13)"
}}>
    {/* Left half background image for desktop */}
    <div className="hidden lg:block absolute top-0 left-0 h-full w-1/2 z-0" style={{
    backgroundImage: `linear-gradient(to right,rgba(44,44,0,0.15) 30%,rgba(255,214,0,0.05) 100%), url('${halfBgImg}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.82,
    pointerEvents: "none"
  }} aria-hidden="true" />
    {/* Center / brand */}
    <div className="w-full flex flex-col items-center mt-12 sm:mt-20 relative z-10">
      <span className="font-hero text-5xl sm:text-6xl font-black tracking-[0.14em] px-7 py-2 rounded bg-transparent text-black drop-shadow-md select-none">
        THOOK
      </span>
      <span className="block font-black uppercase mt-4 sm:mt-7 text-[1.45em] sm:text-2xl tracking-[0.22em] text-black/95">
        {" ONLY FOR"}
      </span>
    </div>

    {/* MEN Card only */}
    <Link to="/products" className="relative z-10 w-full flex flex-row justify-center gap-12 mt-9 sm:mt-12 px-4">
      <HeroCard label="MEN" image={menImg} alt="Men Section" delay={0} gridBorder />
    </Link>

    {/* Bottom Titles - repositioned below the MEN card */}
    <div className="w-full flex flex-col items-center z-40 select-none px-3 mt-12 sm:mt-16 mb-5">
      <h2 className="font-black text-2xl sm:text-3xl tracking-[0.18em] mb-1 uppercase leading-snug opacity-95 drop-shadow-lg text-center">
        <span className="text-[#ffd600]">  ALL EYES O</span>
        <span className="text-black">N REAL MEN</span>
      </h2>
      <p className="max-w-xl text-center text-base sm:text-lg text-black/90 tracking-wide mt-2 opacity-95 font-medium">Home grown brand.   Loved since 2025.</p>
    </div>
  </section>;
export default Hero;