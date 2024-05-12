import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="flex  flex-col w-full h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};
export default HomePage;
