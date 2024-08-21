import { Box } from "@mui/material";
import "./Newsletters.css";
import Navbar from "../comps/Navbar";

export default function Newsletters() {
  return (
    <Box className="newsletters-page">
      <Navbar {...{ page: "Newsletters" }} />
    </Box>
  );
}
