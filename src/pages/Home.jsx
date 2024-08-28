import Navbar from "../comps/Navbar";
import "./Home.css";
// import Contact from "../comps/Contact";
import { Box, Typography } from "@mui/material";
import { InstagramEmbed } from "react-social-media-embed";
import Calendar from "../comps/Calendar";
import Carousel from "../comps/Carousel";
import Contact from "../comps/Contact";
import DateTimeDisplay from "../comps/DateTimeDisplay";
import Schedule from "../comps/Schedule";
import RandomQuote from "../comps/RandomQuote";

export default function Home() {
  const magazineUrl = "https://www.instagram.com/p/C-lwzBvPwGD/";

  return (
    <Box className="home-page">
      <Box className="navbar">
        <Navbar />
      </Box>
      <Box className="content">
        <Box className="title">
          <Typography className="typography" variant="h1" align="center">
            Junior
          </Typography>
        </Box>
        <Box className="title">
          <Typography className="typography" variant="h1">
           Caucus
          </Typography>
        </Box>
        <Box className="blurb">
          <RandomQuote />
        </Box>
        {/* 
      <Box className="slideshow-container">
         */}
        <Box className="slideshow">
          <br />
          <br />
          <br />
          <Carousel className="slideshow-carousel" />
        </Box>
        {/* 
      </Box>
      */}
        <Box className="schedule-calendar">
          <Box className="left-section">
            <Typography className="schedule-title" variant="h1" align="center">
              Schedule
            </Typography>
            <Box className="left-side">
              <Box className="date">
                <DateTimeDisplay />
              </Box>
              <Box className="schedule">
                <Schedule />
              </Box>
            </Box>
          </Box>
          <Box className="calendar-section">
            <Typography className="calendar-title" variant="h1" align="center">
              Calendar
            </Typography>
            <Box className="calendar">
              <Calendar />
            </Box>
          </Box>
        </Box>
        <Box className="magazine-design">
          <Box className="magazine-container">
            <Box>
              <Typography
                className="magazine-title"
                variant="h1"
                align="center"
              >
                Magazine
              </Typography>
            </Box>
            <Box className="magazine-border">
              <Box className="magazine">
                <InstagramEmbed url={magazineUrl} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="footer">
        <Contact />
      </Box>
    </Box>
  );
}
