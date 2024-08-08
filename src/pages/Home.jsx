import "./Home.css";
import Navbar from "../comps/Navbar";
import { Typography, Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const images = [
    "/images/carousel1.png",
    "/images/carousel2.png",
    "/images/carousel3.png",
    "/images/carousel4.png",
];

export default function Home() {
    return (
        <Box className="home-page">
            <Navbar />
            <Box className="content">
                <Typography variant="h1" align="left">
                    Junior <br />
                    Caucus
                </Typography>
                <Carousel responsive={responsive} className="carousel" infinite>
                    {images.map((image, index) => (
                        <Box key={index} className="image-container">
                            <img src={image} alt={`Image ${index + 1}`} />
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </Box>
    );
}
