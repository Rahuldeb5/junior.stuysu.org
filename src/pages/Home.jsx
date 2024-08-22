import "./Home.css";
import Navbar from "../comps/Navbar";
// import Contact from "../comps/Contact";
import { Typography, Box } from "@mui/material";
import { InstagramEmbed } from "react-social-media-embed";
import DateTimeDisplay from "../comps/DateTimeDisplay";
import Calendar from "../comps/Calendar";
import Schedule from "../comps/Schedule";
import Carousel from "../comps/Carousel";
import Contact from "../comps/Contact";

export default function Home() {
  return (
    <Box className="home-page">
      <Box className="navbar">
        <Navbar />
      </Box>

      <Box className="content">
        <Box className="title-slideshow">
          <Box className="title">
            <Typography variant="h1" align="left">
              Junior <br />
              Caucus
            </Typography>
          </Box>
          <Box className="slideshow">
            <Carousel />
          </Box>
        </Box>

        <Box className="date">
          <DateTimeDisplay />
        </Box>

        <Box className="schedule">
          <Schedule />
        </Box>

        <Box className="calendar-magazine">
          <Box className="calendar">
            <Calendar />
          </Box>
          <Box className="magazine">
            <InstagramEmbed url="https://www.instagram.com/p/C-lwzBvPwGD/" />
          </Box>
        </Box>
      </Box>
      <Box className="footer">
        <Contact />
      </Box>
    </Box>
  );
}
