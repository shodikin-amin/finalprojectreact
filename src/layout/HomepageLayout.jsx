import React from "react";
import Nav from "../components/molecules/Nav";
import Footer from "../components/molecules/Footer";
import Hero from "../components/molecules/Hero";

const HomepageLayout = () => {
  return (
    <div>
      <div className="absolute">
        <Nav />
      </div>
      <Hero />
      <Footer />
    </div>
  );
};

export default HomepageLayout;
