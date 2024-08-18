import "./Magazines.css";
import { Box, Typography } from "@mui/material";
import Navbar from "../comps/Navbar";
// import Contact from "../comps/Contact";
import { InstagramEmbed } from "react-social-media-embed";
import StickyFooter from "../comps/StickyFooter";

export default function Magazines() {
  return (
    <Box className="magazines-page">
      <Box className="navbar">
        <Navbar {...{ page: "Magazines" }} />
      </Box>

      <Box className="content" sx={{ flex: 1 }}>
        <Box className="title">
          <Typography variant="h1" align="center">
              Latest Magazine:
          </Typography>
        </Box>
        <Box className="current">
          <InstagramEmbed url="https://www.instagram.com/p/C-lwzBvPwGD/" />
        </Box>
      </Box>
      
      <Box className="footer">
        <StickyFooter />
      </Box>
    </Box>
  );
}
