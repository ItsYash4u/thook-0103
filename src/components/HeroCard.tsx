
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
    <Button
      className="bg-[#ffd600] hover:bg-[#ffec80] active:scale-95 rounded px-10 py-2 text-lg tracking-wide font-black text-black border border-[#ffd600] shadow-none uppercase"
      style={{ letterSpacing: "0.09em" }}
    >
      {label}
    </Button>
  </motion.div>
);

export default HeroCard;
