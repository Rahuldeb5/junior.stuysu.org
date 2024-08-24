import { Box, Typography } from "@mui/material";
import "./Jprom.css";
import Navbar from "../comps/Navbar";

export default function Jprom() {
  return (
    <Box className="jprom-page">
      <Box className="navbar">
        <Navbar {...{ page: "Jprom" }} />
      </Box>

      <Box className="content">
        <Box className="info">
          <Typography variant="h1" className="header">
            Our Fundraising Initiatives:
          </Typography>
          <br />
          <Typography variant="body" className="desc">
            For Junior Prom to be as affordable as possible, Junior Caucus has
            several initiatives dedicated towards fundraising to contribute to
            this cause. The intended goal is to raise $15,000 dollars to lower
            costs for around $50 per student.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
