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
            href="https://linktr.ee/stuyjuniorcaucus24_25"
            className="logo-ref"
          >
            <img src={"/images/linktree.png"} alt="Linktree" />
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
        Co-Presidents:
        <Link
          href="mailto:vlei60@stuy.edu"
          color="inherit"
          sx={{ textDecoration: "none" }}
        >
          {" "}
          Vanna Lei{" "}
        </Link>
        &
        <Link
          href="mailto:pzhang60@stuy.edu"
          color="inherit"
          sx={{ textDecoration: "none" }}
        >
          {" "}
          Philip Zhang{" "}
        </Link>
      </Typography>
      <Typography variant="body1" align="center">
        Chief of Staff:
        <Link
          href="mailto:azhou60@stuy.edu"
          color="inherit"
          sx={{ textDecoration: "none" }}
        >
          {" "}
          Amy Zhou{" "}
        </Link>
        &
        <Link
          href="mailto:kchen60@stuy.edu"
          color="inherit"
          sx={{ textDecoration: "none" }}
        >
          {" "}
          Kelly Chen{" "}
        </Link>
      </Typography>
      <Typography variant="body1" align="center">
        Development Lead:
        <Link
          href="mailto:rdeb60@stuy.edu"
          color="inherit"
          sx={{ textDecoration: "none" }}
        >
          {" "}
          Rahul Deb{" "}
        </Link>
      </Typography>
      <br />
      <Typography variant="body1" align="center">
        Special thanks to our Junior Caucus IT Team:
      </Typography>
      <Box className="developer-columns">
        <Box className="developer-column" align="center">
          <Typography variant="body1">Kalimul Kaif</Typography>
          <Typography variant="body1">David Lee</Typography>
          <Typography variant="body1">Ting Ting Zhang</Typography>
        </Box>
        <Box className="divider" />
        <Box className="developer-column" align="center">
          <Typography variant="body1">Jiewen Huang</Typography>
          <Typography variant="body1">Ardian Agoes</Typography>
          <Typography variant="body1">Alvin Sze</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
