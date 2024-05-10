import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Reports from "./components/Reports";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Reports />
      <Description />
      <ContactUs />
      <AboutUs />
      <Footer />
    </>
  );
};
export default HomePage;
