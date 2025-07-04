import { Box, Typography } from "@mui/material";
import Navbar from "../comps/Navbar";
import "./Jprom.css";
import Carousel from "../comps/Carousel";

export default function Jprom() {
  return (
    <Box className="jprom-page">
      <Box className="navbar">
        <Navbar {...{ page: "Jprom" }} />
      </Box>
      <Box className="content">
        <Box className="info">
          <Box className="fundraisingImg">
            <Box className="fundraisingTitleCaption">
              <Box className="fundRaising">
                <Typography
                  variant="h3"
                  className="header"
                  style={{ fontFamily: "Baskervville SC" }}
                >
                  Our Fundraising Initiatives:
                </Typography>
              </Box>
              <Box className="caption-container">
                <Box className="caption">
                  <Typography
                    variant="body"
                    className="desc"
                    style={{ fontFamily: "Baskervville SC" }}
                  >
                    For Junior Prom to be as affordable as possible, Junior
                    Caucus has several initiatives dedicated towards fundraising
                    to contribute to this cause. The intended goal is to raise
                    $15,000 dollars to lower costs to around $50 per student.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <img
              src="/images/donate.png"
              alt="jpromimage"
              className="jpromImage"
            />
          </Box>
        </Box>
        <Box className="jpromEvent1">
          <Carousel className="slideshow-carousel" />
        </Box>
        <Box className="caption-container">
          <Box className="caption">
            <Typography
              variant="body"
              className="desc"
              style={{ fontFamily: "Baskervville SC" }}
            >
              During the prospective students and parents Open House on
              10/16-17, we raised $800 during our Bake Sale that will be used to
              lower Jprom prices!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
