import "./Magazines.css";
import { Box } from "@mui/material";
import Navbar from "../comps/Navbar";

export default function Magazines() {
  return (
    <Box className="magazines-page">
      <Navbar {...{ page: "Events" }} />
    </Box>
  );
}
