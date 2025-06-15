import React from "react";
import MenSectionCard from "../components/MenSectionCard";

// Pinterest background image for frame area behind the cards
const backgroundUrl =
  "https://i.pinimg.com/736x/95/45/4a/95454a0bfb23e0ef73a1533f13c4c980.jpg";

const MEN_OPTIONS = [
  {
    label: "Anime",
    image: "https://i.pinimg.com/736x/2c/cb/f6/2ccbf6d629250ab2f096d84558b6be12.jpg",
    alt: "Anime Section",
  },
  {
    label: "Spartans",
    image: "https://i.pinimg.com/736x/db/ff/7b/dbff7b7fce0abf787fc72667c4ce7502.jpg",
    alt: "Spartans Section",
  },
  {
    label: "Marvel",
    image: "https://i.pinimg.com/736x/06/35/b2/0635b212f849e46d4b191cf5833d69c7.jpg",
    alt: "Marvel Section",
  },
];

const MenLanding: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black">
      <section className="relative flex flex-col items-center w-full px-3">
        <h1 className="font-black text-4xl sm:text-5xl text-white tracking-[0.13em] mt-10 mb-7 drop-shadow-xl uppercase z-10">
          SELECT YOUR TYPE
        </h1>
        {/* Background behind cards */}
        <div className="relative w-full flex justify-center py-8">
          <div
            className="absolute left-1/2 -translate-x-1/2 w-full max-w-4xl h-full rounded-2xl"
            style={{
              backgroundImage: `url("${backgroundUrl}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(1)",
              zIndex: 1,
            }}
            aria-hidden="true"
          />
          {/* Cards Row (positioned above background) */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-8 justify-center items-center w-full max-w-4xl">
            {MEN_OPTIONS.map((option) => (
              <MenSectionCard
                key={option.label}
                label={option.label}
                image={option.image}
                alt={option.alt}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenLanding;
