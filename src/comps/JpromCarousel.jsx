import { Box, Typography } from "@mui/material";
import React from "react";
import ReactCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import Data from "../data/jprom-slideshow.json";

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

  return (
    <Box className="slideshow">
      <ReactCarousel responsive={responsive} className="carousel" infinite>
        {Data.map((item, index) => (
          <Box key={index} className="image-container">
            <img src={item.image} alt={`Carousel ${index + 1}`} />
            <Typography
              variant="caption"
              className="caption"
              style={{ fontFamily: "Baskervville SC" }}
            >
              {item.caption}
            </Typography>
          </Box>
        ))}
      </ReactCarousel>
    </Box>
  );
};

export default Carousel;
