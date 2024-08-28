import "./Newsletters.css";
import React from "react";
import { Box } from "@mui/material";
import Navbar from "../comps/Navbar.jsx";
import NewslettersData from "../comps/NewslettersData.jsx";



export default function Newsletters() {
  return (
    <Box className="newsletters-page">
      <Box className="navbar">
        <Navbar {...{ page: "Newsletters" }} />
      </Box>
      <Box className="content">
        <NewslettersData />
      </Box>
    </Box>
  );
}
