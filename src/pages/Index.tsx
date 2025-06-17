
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BackgroundMusic from "../components/BackgroundMusic";
import { useNavigate } from "react-router-dom";
import React from "react";

const bgImg =
  "https://i.pinimg.com/736x/dc/f6/b6/dcf6b63ef458829db39368d5ecadab82.jpg";

const Index = () => {
  const navigate = useNavigate();

  const goToMen = () => navigate("/men");

  return (
    <div
      className="min-h-screen w-full bg-background"
      style={{
        backgroundImage: `url("${bgImg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <BackgroundMusic />
      <Topbar />
      <Header />
      <div onClick={goToMen} style={{ cursor: "pointer" }}>
        <Hero />
      </div>
    </div>
  );
};

export default Index;
