
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroCardProps {
  label: string;
  image: string;
  alt: string;
  reverse?: boolean;
  delay?: number;
  gridBorder?: boolean; // new: yellow border if needed
}

// ShinyButton: wraps Button with a shine pseudo-element using tailwind + extra style
const ShinyButton: React.FC<React.ComponentProps<typeof Button> & { children: React.ReactNode }> = ({
  children,
  className = "",
  ...props
}) => (
  <span className="relative group inline-block w-full">
    <Button
      {...props}
      className={
        "bg-[#ffd600] hover:bg-[#ffec80] active:scale-95 rounded px-10 py-2 text-lg tracking-wide font-black text-black border border-[#ffd600] shadow-none uppercase overflow-hidden " +
        "shine-btn " +
        className
      }
      style={{ letterSpacing: "0.09em" }}
    >
      {/* Button text */}
      <span className="relative z-10">{children}</span>
      {/* Shine pseudo-element */}
      <span className="shine-effect pointer-events-none"></span>
    </Button>
    {/* Extra styles for the shine effect */}
    <style jsx>{`
      .shine-btn {
        position: relative;
      }
      .shine-effect {
        position: absolute;
        top: -60%;
        left: -60%;
        width: 180%;
        height: 250%;
        background: linear-gradient(115deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.08) 100%);
        opacity: 0.85;
        transform: skewY(-25deg);
        pointer-events: none;
        z-index: 2;
        transition: none;
        filter: blur(0.5px);
        animation: none;
      }
      .group:hover .shine-effect, .shine-btn:focus .shine-effect {
        animation: shine-diagonal 1.1s cubic-bezier(.22,.61,.36,1) 1;
      }
      @keyframes shine-diagonal {
        0% {
          left: -60%; top: -80%; opacity: 0;
        }
        12% {
          opacity: 0.58;
        }
        30% {
          opacity: 0.95;
        }
        55% {
          opacity: 1;
        }
        80% {
          left: 80%; top: 85%; opacity: 1;
        }
        100% {
          left: 120%; top: 120%; opacity: 0;
        }
      }
    `}</style>
  </span>
);

const HeroCard: React.FC<HeroCardProps> = ({
  label,
  image,
  alt,
  delay = 0,
  gridBorder = false,
}) => (
  <motion.div
    className={`flex flex-col items-center bg-[#fffef8]/95 rounded-xl shadow-lg px-5 py-6 w-full max-w-[270px] mx-auto border-2 ${
      gridBorder ? "border-[#ffd600]" : "border-black"
    }`}
    initial={{ opacity: 0, y: 33 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, delay }}
    style={{ boxShadow: "0 7px 32px 0 rgba(44,44,0,.11)" }}
  >
    <div className="w-36 h-48 sm:w-44 sm:h-52 rounded-lg overflow-hidden mb-4 flex items-end justify-center border border-[#ffd600] bg-gray-100 shadow">
      <img
        src={image}
        alt={alt}
        className="object-cover object-top w-full h-full"
        draggable={false}
      />
    </div>
    <ShinyButton
      tabIndex={0}
      onClick={() => {
        // For now, navigate to /men
        window.location.href = "/men";
      }}
    >
      {label}
    </ShinyButton>
  </motion.div>
);

export default HeroCard;

