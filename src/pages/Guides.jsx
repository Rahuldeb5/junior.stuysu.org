import { Box } from "@mui/material";
import "./Guides.css";
import Navbar from "../comps/Navbar";

export default function Guides() {
  return (
    <Box className="guides-page">
      <Box className="navbar">
        <Navbar {...{ page: "Guides" }} />
      </Box>
    </Box>
  );
}
