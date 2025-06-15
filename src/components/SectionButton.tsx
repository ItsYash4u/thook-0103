
import React from "react";

interface SectionButtonProps {
  label: string;
}

const colorMap: Record<string, string> = {
  Anime: "from-[#ffd600] to-pink-400",
  Spartans: "from-[#ffd600] to-green-400",
  Marvel: "from-[#ffd600] to-indigo-500",
};

const SectionButton: React.FC<SectionButtonProps> = ({ label }) => {
  return (
    <button
      className={`w-60 h-32 rounded-xl font-black text-2xl uppercase tracking-wide bg-gradient-to-br ${colorMap[label] || "from-[#ffd600] to-gray-400"} shadow-xl text-black relative overflow-hidden hover-scale transform transition duration-200 outline-none focus:ring-2 focus:ring-[#ffd600]`}
      // Add onClick soon if desired
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 bg-white/8 pointer-events-none" />
    </button>
  );
};

export default SectionButton;
