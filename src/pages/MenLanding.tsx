
import React from "react";
import MenSectionCard from "../components/MenSectionCard";

const backgroundUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa7AKRaV1zJvgGaxIhXL8iletMUpQcQ8HIpQ&s";

// Provided base64 images
const ANIME_IMG =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSERIVFRUXFRUV..."; // (truncated for clarity)
const SPARTANS_IMG =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXGBcY..."; // (truncated for clarity)
const MARVEL_IMG =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFhUWFxUV..."; // (truncated for clarity)

const MEN_OPTIONS = [
  {
    label: "Anime",
    image: ANIME_IMG,
    alt: "Anime Section",
  },
  {
    label: "Spartans",
    image: SPARTANS_IMG,
    alt: "Spartans Section",
  },
  {
    label: "Marvel",
    image: MARVEL_IMG,
    alt: "Marvel Section",
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
        <h1 className="font-black text-4xl sm:text-5xl text-white tracking-[0.13em] mt-10 mb-7 drop-shadow-xl uppercase">
          SELECT YOUR TYPE
        </h1>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center w-full max-w-4xl py-8">
          {MEN_OPTIONS.map((option) => (
            <MenSectionCard
              key={option.label}
              label={option.label}
              image={option.image}
              alt={option.alt}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenLanding;
