import { Box, Typography, Link } from "@mui/material";
import Navbar from "../comps/Navbar";
import "./JpromMenu.css";

export default function JpromMenu() {
  return (
    <Box className="menu-page">
      <Box className="navbar">
        <Navbar {...{ page: "Menu" }} />
      </Box>
      <Box className="event-content">
        <Box className="info">
          <Box className="photo-box">
            <img src="/images/jpromMenu.png" />
          </Box>
          <Box className="menu-title-box">
            <Typography
              variant="h1"
              className="menu-title"
              style={{ fontFamily: "Baskervville SC" }}
            >
              JProm Menu
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
