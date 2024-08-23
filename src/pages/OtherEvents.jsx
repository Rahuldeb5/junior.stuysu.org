import { Box } from "@mui/material";
import "./OtherEvents.css";
import Navbar from "../comps/Navbar";

export default function OtherEvents() {
  return (
    <Box className="other-events-page">
      <Navbar {...{ page: "OtherEvents" }} />
    </Box>
  );
}
