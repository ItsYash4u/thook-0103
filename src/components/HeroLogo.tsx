
import React from "react";

// Closest match to the BEWAKOOF logo style: all-caps, letter spacing, strong yellow background, large font, black text
const HeroLogo = () => (
  <div className="flex justify-center">
    <div
      className="font-hero text-6xl sm:text-8xl font-black tracking-[0.15em] px-6 py-1 rounded bg-[#FFD600] text-black shadow-xl inline-block select-none"
      style={{
        letterSpacing: '0.13em',
        lineHeight: 1.09,
      }}
    >
      THOOK
    </div>
  </div>
);

export default HeroLogo;
