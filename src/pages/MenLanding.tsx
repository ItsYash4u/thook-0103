import React from "react";
import MenSectionCard from "../components/MenSectionCard";
import { useNavigate } from "react-router-dom";

const backgroundUrl =
  "https://i.pinimg.com/736x/95/45/4a/95454a0bfb23e0ef73a1533f13c4c980.jpg";

const MEN_OPTIONS = [
  {
    label: "Anime",
    image: "https://i.pinimg.com/736x/2c/cb/f6/2ccbf6d629250ab2f096d84558b6be12.jpg",
    alt: "Anime Section",
    category: "anime",
  },
  {
    label: "Spartans",
    image: "https://i.pinimg.com/736x/db/ff/7b/dbff7b7fce0abf787fc72667c4ce7502.jpg",
    alt: "Spartans Section",
    category: "spartans",
  },
  {
    label: "Marvel",
    image: "https://i.pinimg.com/736x/06/35/b2/0635b212f849e46d4b191cf5833d69c7.jpg",
    alt: "Marvel Section",
    category: "marvel",
  },
];

const MenLanding: React.FC = () => {
  const navigate = useNavigate();
  const goToCategory = (category: string) => {
    // Go to /products?category=anime|spartans|marvel
    navigate(`/products?category=${category}`);
  };
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url("${backgroundUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
      }}
    >
      {/* Fixed brand name in top-left, style matches Header/HeroLogo */}
      <div className="fixed top-4 left-5 z-50 select-none pointer-events-none">
        <div
          className="font-hero text-3xl sm:text-4xl font-black tracking-[0.12em] px-4 sm:px-6 py-2 rounded bg-[#FFD600] text-black shadow-lg border-2 border-black inline-block"
          style={{
            letterSpacing: "0.13em",
            lineHeight: 1.16,
          }}
        >
          THOOK
        </div>
      </div>
      <section className="relative flex flex-col items-center w-full px-3">
        <h1 className="font-black text-4xl sm:text-5xl text-white tracking-[0.13em] mt-10 mb-7 drop-shadow-xl uppercase z-10">
          SELECT YOUR TYPE
        </h1>
        <div className="relative z-10 flex flex-col sm:flex-row gap-8 justify-center items-center w-full max-w-4xl py-8">
          {MEN_OPTIONS.map((option) => (
            <MenSectionCard
              key={option.label}
              label={option.label}
              image={option.image}
              alt={option.alt}
              onClick={() => goToCategory(option.category)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenLanding;
