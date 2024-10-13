import { Box, Typography, Link } from "@mui/material";
import Navbar from "../comps/Navbar";
import "./OtherEvents.css";

export default function OtherEvents() {
  return (
    <Box className="other-page">
      <Box className="navbar">
        <Navbar {...{ page: "OtherEvents" }} />
      </Box>
      <Box className="event-content">
        <Box className="info">
          <Box className="photo-box">
            <img 
            src="/images/UAtrium.jpg"
            />
                        <img 
            src="/images/JuniorAtrium.jpg"
            />
          </Box>
          <Box className="otherevents-title-box">
          <Typography
            variant="h1"
            className="otherevents-title"
            style={{ fontFamily: "Baskervville SC" }}
          >
            10/08 Junior Atrium Photos
          </Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}
