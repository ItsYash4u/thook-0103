import React, { useState } from "react";

// Simple shine effect for neon yellow button, matching homepage card
const ShinyButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }> = ({
  children,
  loading = false,
  className = "",
  ...props
}) => (
  <span className="relative group inline-block w-full">
    <button
      {...props}
      className={
        "w-full bg-[#ffd600] hover:bg-[#ffec80] active:scale-95 rounded px-8 py-2 text-lg tracking-wide font-black text-black border border-[#ffd600] shadow-none uppercase overflow-hidden " +
        "shine-btn " +
        (loading ? "pointer-events-none opacity-60 cursor-not-allowed" : "") +
        className
      }
      style={{ letterSpacing: "0.09em" }}
      disabled={loading}
    >
      <span className="relative z-10 flex items-center justify-center">{children}</span>
      <span className="shine-effect pointer-events-none"></span>
    </button>
    <style>{`
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

interface MenSectionCardProps {
  label: string;
  image: string;
  alt: string;
  onClick?: () => void;
}

const MenSectionCard: React.FC<MenSectionCardProps> = ({
  label,
  image,
  alt,
  onClick,
}) => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    if (onClick) {
      onClick();
    }
    setTimeout(() => setLoading(false), 1100);
  };

  return (
    <div className="relative flex flex-col items-center bg-[#fffef8]/95 rounded-xl shadow-lg px-4 py-6 w-full max-w-[270px] mx-auto border-2 border-black"
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
      <div className="flex justify-center w-full">
        <ShinyButton onClick={handleButtonClick} loading={loading}>
          {label}
        </ShinyButton>
      </div>
      {loading && (
        <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center z-30 bg-[#fffef8eb] rounded-xl">
          <span className="font-black text-black text-lg tracking-widest animate-pulse">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default MenSectionCard;
