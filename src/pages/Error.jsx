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
        <Typography variant="h1" className="error-title" style={{ fontFamily: "Baskervville SC" }}>
            404 Error
        </Typography>
      </Box>
    </Box>
  );
}