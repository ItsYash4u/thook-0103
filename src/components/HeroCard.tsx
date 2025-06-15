
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
    className={`flex flex-col items-center bg-white/85 rounded-2xl shadow-xl px-5 py-6 max-w-[322px] mx-auto border-2 border-black`}
    initial={{ opacity: 0, y: 36 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, delay }}
  >
    <div className="w-40 h-48 sm:w-52 sm:h-64 rounded-xl overflow-hidden mb-5 flex items-end justify-center border-2 border-black bg-gray-200 shadow-md">
      <img
        src={image}
        alt={alt}
        className="object-cover object-top w-full h-full"
        draggable={false}
      />
    </div>
    <Button
      className="bg-[#ffd600] hover:bg-[#ffec80] active:scale-95 rounded-full px-12 py-2 text-lg tracking-wide font-black text-black border-2 border-black shadow transition-all duration-150 uppercase"
      style={{ boxShadow: "0 2px 10px 0 rgba(44,44,0,.08)" }}
    >
      {label}
    </Button>
  </motion.div>
);

export default HeroCard;
