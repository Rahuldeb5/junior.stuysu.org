import { Box, Typography } from "@mui/material";
import "./OtherEvents.css";
import Navbar from "../comps/Navbar";

export default function OtherEvents() {
  return (
    <Box className="other-page">
      <Box className="navbar">
        <Navbar {...{ page: "OtherEvents" }} />
      </Box>
      <Box className="content">
        <Box className="info">
          <Typography variant="h1" className="title">
            No Events Yet!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
