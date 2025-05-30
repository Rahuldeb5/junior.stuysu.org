import { Box, Typography, Link, Button } from "@mui/material";
import Navbar from "../comps/Navbar";
import "./JpromMenu.css";
import { useNavigate } from "react-router-dom";

export default function JpromMenu() {
  const navigate = useNavigate();
  return (
    <Box className="menu-page">
      <Box className="navbar">
        <Navbar {...{ page: "Menu" }} />
      </Box>
      <Box className="jprom-links">
        <Box className="jprom-link">
          <Button className="jprom-button" variant="contained" color="primary" size="large" style={{backgroundColor: '#444484  ',color: '#ffffff'}} onClick={() => navigate('/jprom')}>
            Jprom
          </Button>
          <Button className="jprom-button" variant="contained" color="primary" size="large" style={{backgroundColor: '#444484  ',color: '#ffffff'}} onClick={() => navigate('/menu')}>
            Menu
          </Button>
          <Button className="jprom-button" variant="contained" color="primary" size="large" style={{backgroundColor: '#444484  ',color: '#ffffff'}} onClick={() => navigate('/route')}>
            Route
          </Button>
          <Button className="jprom-button" variant="contained" color="primary" size="large" style={{backgroundColor: '#444484  ',color: '#ffffff'}} onClick={() => navigate('/forms')}>
            Forms
          </Button>
        </Box>
      </Box>
      <Box className="event-content">
        <Box className="info">
          <Box className="photo-box">
            <img src="/images/jpromMenu.png" />
          </Box>
          <Box className="menu-title-box">
            <Typography
              variant="h1"
              className="menu-title"
              style={{ fontFamily: "Baskervville SC" }}
            >
              JProm Menu
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
