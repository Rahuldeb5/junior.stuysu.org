import { Box, Typography } from "@mui/material";
import Navbar from "../comps/Navbar";
import "./OtherEvents.css";

export default function OtherEvents() {
  return (
    <Box className="other-page">
      <Box className="navbar">
        <Navbar {...{ page: "OtherEvents" }} />
      </Box>
      <Box className="content">
        <Box className="info">
          <Typography
            variant="h1"
            className="otherevents-title"
            style={{ fontFamily: "Baskervville SC" }}
          >
            No Events Yet!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
