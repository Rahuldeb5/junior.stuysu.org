import { Box, Typography } from "@mui/material";
import Navbar from "../comps/Navbar";
import "./Jprom.css";

export default function Jprom() {
  return (
    <Box className="jprom-page">
      <Box className="navbar">
        <Navbar {...{ page: "Jprom" }} />
      </Box>

      <Box className="content">
        <Box className="info">
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
              <Typography variant="body" className="desc">
                For Junior Prom to be as affordable as possible, Junior Caucus
                has several initiatives dedicated towards fundraising to
                contribute to this cause. The intended goal is to raise $15,000
                dollars to lower costs to around $50 per student.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
