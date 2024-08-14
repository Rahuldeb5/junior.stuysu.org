import React from "react";
import "./Contact.css";
import { Box, Link, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box className="footer">
      <Box className="icons-container">
        <Box className="icons" align="center">
          <Link
            href="https://www.instagram.com/stuyjuniorcaucus/?hl=en"
            className="logo-ref"
          >
            <img src={"/images/instagram.png"} alt="Instagram logo" />
          </Link>
        </Box>
      </Box>
      <Typography variant="body1" align="center">
        © 2024 Junior Caucus. Vanna & Philip.
      </Typography>
    </Box>
  );
};

export default Contact;
