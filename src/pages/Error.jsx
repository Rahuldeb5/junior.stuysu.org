import "./Error.css";
import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../comps/Navbar.jsx";

export default function Error() {
  return (
    <Box className="error-page">
      <Box className="navbar">
        <Navbar />
      </Box>
      <Box className="content">
        <Typography variant="body1" style={{ fontFamily: "Baskervville SC" }}>
          You have entered Rahuldeb5's secret lair. Actually, this is me telling
          you to see this page on a computer =)
        </Typography>
        <Typography
          variant="h1"
          className="error-title"
          style={{ fontFamily: "Baskervville SC" }}
        >
          Return to the home page!
        </Typography>
      </Box>
      <img src="/images/error.png" alt="errorImage" className="errorImage" />
    </Box>
  );
}
