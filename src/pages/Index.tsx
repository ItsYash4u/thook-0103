
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Hero from "../components/Hero";

const bgImg =
  "https://i.pinimg.com/736x/dc/f6/b6/dcf6b63ef458829db39368d5ecadab82.jpg";

const Index = () => {
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
      <Topbar />
      <Header />
      <Hero />
    </div>
  );
};

export default Index;

