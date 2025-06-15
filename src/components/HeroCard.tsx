
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroCardProps {
  label: string;
  image: string;
  alt: string;
  reverse?: boolean;
  delay?: number;
}

const HeroCard: React.FC<HeroCardProps> = ({ label, image, alt, reverse, delay=0 }) => (
  <motion.div
    className={`flex flex-col items-center bg-white/75 rounded-3xl shadow-lg p-3 sm:p-6 max-w-xs mx-auto ${
      reverse ? "order-2 sm:order-2" : ""
    }`}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, delay }}
  >
    <div className="w-36 h-48 sm:w-48 sm:h-60 rounded-2xl overflow-hidden mb-4 flex items-end justify-center relative border-2 border-black bg-gray-200">
      <img
        src={image}
        alt={alt}
        className="object-cover object-top w-full h-full"
        draggable={false}
      />
    </div>
    <Button
      className="bg-[#ffd600] hover:bg-yellow-400 active:scale-95 rounded-full px-8 py-2 text-base sm:text-lg tracking-wide font-extrabold text-black border border-black shadow-sm transition-all duration-150 hover:scale-105"
      style={{ boxShadow: "0 2px 10px 0 rgba(44,44,0,.05)" }}
    >
      {label}
    </Button>
  </motion.div>
);

export default HeroCard;
