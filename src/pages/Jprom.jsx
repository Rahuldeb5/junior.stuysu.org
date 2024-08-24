import { Box } from "@mui/material";
import "./Jprom.css";
import Navbar from "../comps/Navbar";

export default function Jprom() {
  return (
    <Box className="jprom-page">
      <Box className="navbar">
        <Navbar {...{ page: "Jprom" }} />
      </Box>
    </Box>
  );
}
