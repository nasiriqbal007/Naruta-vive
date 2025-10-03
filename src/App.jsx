import React from "react";
import TopBanner from "./component/TopBanner";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Features from "./component/Features";
import OurProducts from "./component/our_product/OurProducts";
import AboutUs from "./component/AboutUs";
import Testimonial from "./component/testimonial/Testimonial";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <div id="home" className="bg-primary sticky z-50 top-0">
        <TopBanner />
        <Navbar />
      </div>
      <Hero />
      <Features />
      <OurProducts />
      <AboutUs />
      <Testimonial />

      <Footer />
    </>
  );
};

export default App;
