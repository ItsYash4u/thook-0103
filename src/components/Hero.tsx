
import React from "react";
import HeroLogo from "./HeroLogo";
import HeroCard from "./HeroCard";

const heroBgDiamond = `repeating-linear-gradient(
    45deg, #fff0 0, #fff0 36px, #ffe066 36px, #ffe066 38px
  ),
  repeating-linear-gradient(
    -45deg,#fff0 0, #fff0 36px, #ffe066 36px, #ffe066 38px
  ),
  linear-gradient(135deg, #fffde4 0%, #ffd600 100%)`;

const menImg =
  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=facearea&w=400&q=80&facepad=3.5";
const womenImg =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=400&q=80&facepad=3.5";

// Character cutouts: These are placeholders, arrange as absolute images. 
const characters = [
  {
    src: "https://pngimg.com/uploads/deadpool/deadpool_PNG65.png",
    alt: "Deadpool cutout",
    className: "hidden md:block absolute left-2 bottom-0 w-28 z-20 drop-shadow-lg",
    style: { transform: "rotate(-7deg)" },
  },
  {
    src: "https://pngimg.com/uploads/naruto/naruto_PNG77.png",
    alt: "Naruto cutout",
    className: "absolute left-32 md:left-40 bottom-0 w-24 md:w-28 z-20 drop-shadow-md",
    style: { transform: "rotate(-2deg)" },
  },
  {
    src: "https://pngimg.com/uploads/black_panther/black_panther_PNG26.png",
    alt: "Black Panther cutout",
    className: "hidden sm:block absolute left-1/2 -translate-x-1/2 bottom-0 w-28 z-20",
    style: {},
  },
  {
    src: "https://pngimg.com/uploads/minion/minion_PNG93.png",
    alt: "Minions cutout",
    className: "hidden md:block absolute right-28 bottom-0 w-24 z-20 drop-shadow-sm",
    style: {},
  },
  {
    src: "https://pngimg.com/uploads/deadpool/deadpool_PNG65.png",
    alt: "Deadpool cutout 2",
    className: "absolute right-5 bottom-0 w-18 md:w-28 z-20 drop-shadow-lg",
    style: { transform: "rotate(7deg)" },
  },
];

const Hero: React.FC = () => (
  <section
    className="relative overflow-hidden min-h-[680px] sm:min-h-[790px] flex flex-col justify-start pt-10 pb-0 md:pt-16"
    style={{
      background: heroBgDiamond,
      boxShadow: "inset 0 -60px 80px -20px rgba(255,214,0,0.15)",
    }}
  >
    {/* Logo and subtitle */}
    <div className="w-full flex flex-col items-center gap-2">
      <HeroLogo />
      <span className="uppercase font-bold text-[1.05em] text-black/95 mt-6 sm:mt-8 tracking-widest text-base sm:text-lg letter-spacing-[.14em] opacity-80">SHOP FOR</span>
    </div>
    
    {/* Cards */}
    <div className="w-full flex flex-row justify-center gap-6 sm:gap-12 mt-8 sm:mt-12 px-3 sm:px-0 z-10">
      <div className="flex w-full max-w-2xl gap-4 sm:gap-12 mx-auto flex-col sm:flex-row">
        <HeroCard
          label="MEN"
          image={menImg}
          alt="Men's fashion model"
          delay={0}
        />
        <HeroCard
          label="WOMEN"
          image={womenImg}
          alt="Women's fashion model"
          delay={0.12}
          reverse
        />
      </div>
    </div>

    {/* Subtitle + Description (fixed text, as instructed) */}
    <div className="w-full flex flex-col items-center mt-12 sm:mt-16 select-none z-10 px-3">
      <h2 className="font-black text-2xl sm:text-3xl text-black/90 tracking-widest mb-0 leading-snug uppercase opacity-95">
        ALL EYES ON YOU
      </h2>
      <p className="max-w-xl text-center text-[1.04em] text-black/85 tracking-wider mt-2 opacity-90 font-medium">
        Step into the world of iconic pop culture, superhero, and cartoon fashion. Love anime, comics, superheroes, or just want to stand out? Get noticed with our exclusive collection.
      </p>
    </div>

    {/* Characters (cartoon cutouts/cosplay silhouettes), abs pos at bottom */}
    <div className="pointer-events-none select-none absolute bottom-0 w-full left-0 flex flex-row justify-between items-end h-[150px] sm:h-[185px] z-10">
      {characters.map((c, i) => (
        <img 
          src={c.src}
          alt={c.alt}
          key={i}
          className={c.className}
          style={c.style}
          draggable={false}
        />
      ))}
    </div>

    {/* Grid overlay for extra patterning (optional, but subtle) */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <svg width="100%" height="100%" className="absolute inset-0" style={{ mixBlendMode: "overlay" }}>
        <defs>
          <pattern
            id="tinyGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#fff7ae"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tinyGrid)" />
      </svg>
    </div>
  </section>
);

export default Hero;
