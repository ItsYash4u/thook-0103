
import React from "react";
import HeroLogo from "./HeroLogo";
import HeroCard from "./HeroCard";

const heroBgDiamond = `linear-gradient(135deg, #fffde4 0%, #ffd600 100%)`;

const menImg = "/lovable-uploads/712fefe1-b5d4-4a31-9499-ca460f8f2ed2.png";
const womenImg = "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop";

const Hero: React.FC = () => (
  <section
    className="relative overflow-hidden min-h-[680px] sm:min-h-[790px] flex flex-col justify-start items-center"
    style={{
      background: heroBgDiamond,
      boxShadow: "inset 0 -30px 40px -10px rgba(255,214,0,0.11)",
    }}
  >
    {/* Logo */}
    <div className="w-full flex flex-col items-center mt-12 sm:mt-20">
      <HeroLogo />
      {/* Subtitle */}
      <span className="uppercase font-extrabold text-[1.1em] tracking-[0.25em] mt-7 text-black/90 text-base sm:text-lg" style={{ letterSpacing: '0.26em' }}>
        SHOP FOR
      </span>
    </div>
    
    {/* Cards */}
    <div className="w-full flex flex-row justify-center gap-8 mt-10 sm:mt-14 px-4 z-10">
      <HeroCard
        label="MEN"
        image={menImg}
        alt="Bodybuilding guy wearing gym tshirt"
        delay={0}
      />
      <HeroCard
        label="WOMEN"
        image={womenImg}
        alt="Woman in fashionable outfit"
        delay={0.2}
      />
    </div>
    
    {/* Bottom Titles */}
    <div className="w-full flex flex-col items-center mt-14 sm:mt-16 select-none z-10 px-3">
      <h2 className="font-black text-2xl sm:text-3xl text-black/90 tracking-[0.18em] mb-0 leading-snug uppercase opacity-95">
        ALL EYES ON YOU
      </h2>
      <p className="max-w-xl text-center text-[1em] text-black/85 tracking-wide mt-3 opacity-90 font-medium">
        Step into the world of iconic pop culture, superhero, and cartoon fashion. Love anime, comics, superheroes, or just want to stand out? Get noticed with our exclusive collection.
      </p>
    </div>
  </section>
);

export default Hero;
