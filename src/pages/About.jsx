import "./About.css";
import { Box } from "@mui/material";
import Navbar from "../comps/Navbar";

export default function About() {
    return (
        <Box className="about-page">
            <Navbar {...{ page: "About" }} />
        </Box>
    );
}
