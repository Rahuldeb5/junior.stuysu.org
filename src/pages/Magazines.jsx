import { Box } from "@mui/material";
import "./Magazines.css";
import Navbar from "../comps/Navbar";
import DropdownBoxes from "../comps/DropdownBoxes";
import useMobileRedirect from "../comps/useMobileRedirect";

export default function Magazines() {
  useMobileRedirect();

  return (
    <Box className="magazines-page">
      <Box className="navbar">
        <Navbar {...{ page: "Magazines" }} />
      </Box>
      <Box className="content">
        <DropdownBoxes />
      </Box>
    </Box>
  );
}
