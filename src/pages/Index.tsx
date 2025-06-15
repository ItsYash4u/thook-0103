
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Hero from "../components/Hero";

const bgImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmiDg-tYr3_YRRIf0ueN2eHckhD6s3QaseCQ&s";

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
