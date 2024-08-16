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
          <Link
            href="https://www.facebook.com/groups/stuyclass2026"
            className="logo-ref"
          >
            <img src={"/images/facebook.png"} alt="Facebook logo" />
          </Link>
          <Link
            href="https://github.com/Rahuldeb5/junior.stuysu.org"
            className="logo-ref"
          >
            <img src={"/images/github.png"} alt="GitHub logo" />
          </Link>
        </Box>
      </Box>
      <Typography variant="body1" align="center">
        © 2024 Junior Caucus.
      </Typography>
      <Typography variant="body1" align="center">
        Co-Presidents: Vanna Lei & Philip Zhang
      </Typography>
      <Typography variant="body1" align="center">
        Chief of Staff: Amy Zhou & Kelly Chen
      </Typography>
      <Typography variant="body1" align="center">
        Development Lead: Rahul Deb
      </Typography>
    </Box>
  );
};

export default Contact;
