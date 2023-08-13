import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img2 from "../assets/three.png";
import img1 from "../assets/four.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item1" />
          <p className="legend">support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
