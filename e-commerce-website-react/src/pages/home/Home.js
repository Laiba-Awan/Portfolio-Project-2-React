import React from "react";
import Carousel from "../../components/carousel/Carousel";
import Services from "../../components/services/Services";
import BestSelling from "../../components/bestSelling/BestSelling"
import About from "../../components/about/About";
import Reviews from "../../components/review/Reviews";
import Logos from "../../components/logos/Logos";
import Footer from "../../components/footer/Footer";
function Home() {
  return (
    <div className="bg-color">
      <Carousel />
      <Services />
      <BestSelling />
      <About  />
      <Reviews />
      <Logos />
      <Footer />
    </div>
  );
}

export default Home;
