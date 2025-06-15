
import React from "react";

// Tweaked size, padding, background to match reference image
const HeroLogo = () => (
  <div className="flex justify-center">
    <div
      className="font-hero text-7xl sm:text-8xl font-black tracking-[0.19em] px-8 py-2 rounded bg-[#FFD600] text-black shadow-2xl inline-block select-none border-2 border-black"
      style={{
        letterSpacing: '0.18em',
        lineHeight: 1.11,
      }}
      data-testid="hero-logo"
    >
      THOOK
    </div>
  </div>
);

export default HeroLogo;
