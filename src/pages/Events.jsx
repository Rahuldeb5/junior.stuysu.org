import "./Events.css";
import { Box } from "@mui/material";
import Navbar from "../comps/Navbar";

export default function Events() {
  return (
    <Box className="events-page">
      <Navbar {...{ page: "Events" }} />
    </Box>
  );
}
