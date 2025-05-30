import { Box, Button } from "@mui/material";
import GuideCard from "../comps/GuideCard";
import Navbar from "../comps/Navbar";
import Form from "../data/jpromForms.json";
import "./Forms.css";
import { useNavigate } from "react-router-dom";

export default function Forms() {
  const navigate = useNavigate();
  
  return (
    <Box className="forms-page">
      <Box className="navbar">
        <Navbar {...{ page: "Forms" }} />
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
      <Box className="content">
        <Box className="forms-super">
          <Box className="forms-container">
            {Form.slice()
              .map((form) => (
                <GuideCard
                  title={form.title}
                  link={form.link}
                  date={form.date}
                  blurb={form.blurb}
                />
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
