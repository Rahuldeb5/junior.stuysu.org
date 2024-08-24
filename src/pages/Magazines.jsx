import { Box } from "@mui/material";
import "./Magazines.css";
import Navbar from "../comps/Navbar";

export default function Magazines() {
  return (
    <Box className="magazines-page">
      <Navbar {...{ page: "Magazines" }} />
    </Box>
  );
}
