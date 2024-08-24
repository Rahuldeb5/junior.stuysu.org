import { Box } from "@mui/material";
import "./Newsletters.css";
import Navbar from "../comps/Navbar";

export default function Newsletters() {
  return (
    <Box className="newsletters-page">
      <Box className="navbar">
        <Navbar {...{ page: "Newsletters" }} />
      </Box>
    </Box>
  );
}
