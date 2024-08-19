import React from "react";
import "./StickyFooter.css";
import { Box, Link } from "@mui/material";

const StickyFooter = () => {
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
    </Box>
  );
};

export default StickyFooter;
