
import React from "react";
import SectionButton from "../components/SectionButton";

const backgroundUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa7AKRaV1zJvgGaxIhXL8iletMUpQcQ8HIpQ&s";

const MEN_OPTIONS = [
  {
    label: "Anime",
    value: "anime",
  },
  {
    label: "Spartans",
    value: "spartans",
  },
  {
    label: "Marvel",
    value: "marvel",
  },
];

const MenLanding: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url("${backgroundUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />
      <section className="relative z-10 flex flex-col items-center w-full px-3">
        <h1 className="font-black text-4xl sm:text-5xl text-white tracking-[0.13em] mt-10 mb-7 drop-shadow-xl uppercase">SELECT YOUR FLAVOUR</h1>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center w-full max-w-4xl py-8">
          {MEN_OPTIONS.map((option) => (
            <SectionButton key={option.value} label={option.label} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenLanding;
