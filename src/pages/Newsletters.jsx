import "./Newsletters.css";
import React from "react";
import { Box } from "@mui/material";
import Navbar from "../comps/Navbar.jsx";
import NewslettersData from "../comps/NewslettersData.jsx";
import useMobileRedirect from "../comps/useMobileRedirect.js";

export default function Newsletters() {
  useMobileRedirect();

  return (
    <Box className="newsletters-page">
      <Box className="navbar">
        <Navbar {...{ page: "Newsletters" }} />
      </Box>
      <Box className="newslettersContent">
        <NewslettersData />
      </Box>
    </Box>
  );
}
