import { Box } from "@mui/material";
import "./Guides.css";
import Navbar from "../comps/Navbar";

export default function Guides() {
  return (
    <Box className="guides-page">
      <Navbar {...{ page: "Guides" }} />
    </Box>
  );
}
