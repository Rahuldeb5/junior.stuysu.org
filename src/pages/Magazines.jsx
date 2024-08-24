import { Box } from "@mui/material";
import "./Magazines.css";
import Navbar from "../comps/Navbar";

export default function Magazines() {
  return (
    <Box className="magazines-page">
      <Box className="navbar">
        <Navbar {...{ page: "Magazines" }} />
      </Box>
    </Box>
  );
}
