import { Box } from "@mui/material";
import React from "react";
import ReactCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";

const Carousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselImages = [
    "/images/carousel1.png",
    "/images/carousel2.png",
    "/images/carousel3.png",
    "/images/carousel4.png",
  ];

  return (
    <Box className="slideshow">
      <ReactCarousel responsive={responsive} className="carousel" infinite>
        {carouselImages.map((image, index) => (
          <Box key={index} className="image-container">
            <img src={image} alt={`Image ${index + 1}`} />
          </Box>
        ))}
      </ReactCarousel>
    </Box>
  );
};

export default Carousel;
