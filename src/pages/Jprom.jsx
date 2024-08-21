import { Box } from "@mui/material";
import "./Jprom.css";
import Navbar from "../comps/Navbar";

export default function Jprom() {
  return (
    <Box className="jprom-page">
      <Navbar {...{ page: "Jprom" }} />
    </Box>
  );
}
