import { Box, Button, Collapse, Typography } from "@mui/material";
import React, { useState } from "react";
import Carousel from "../comps/JpromCarousel";
import Contact from "../comps/Contact";
import Navbar from "../comps/Navbar";
import { useNavigate } from 'react-router-dom';

import "./NewJprom.css";

export default function NewJprom() {
  const navigate = useNavigate();

  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [rotateArrow, setRotateArrow] = useState(false);
  const questionsAndAnswers = [
    {question: "Do we get to know what food will be served?", answer: (
      <React.Fragment>
        Yes! This is the <a href="https://docs.google.com/document/d/1vMu8kWkczAraT2c1ubOncTpgNGMfGxvDaU9WEGfsGLc/edit?tab=t.0" target="_blank" rel="noopener" className="faq-link">menu</a>
      </React.Fragment>
    )},
    {question: "Can we bring non stuy kids?", answer: "No."},
    {question: "Can we bring stuy students from different grades?", answer: "Yes."},
    {question: "Can we buy more than one ticket?", answer: "Yes! you can buy an additonal ticket for a guest"},
  ];
  const expandOnClick = (questionIndex) => {
    setExpandedQuestion(expandedQuestion === questionIndex ? null : questionIndex);
    setRotateArrow(!rotateArrow);
  };
  return (
    <Box>
    <Box className="navbar">
    <Navbar />
  </Box>  
    <Box className="home-page">
      <Box className="banner">
        <Typography className="banner-title">‼️TICKETS‼️</Typography>
        <Typography className="banner-text">Tickets are now available to buy! Click below to be redirected.</Typography>
        <Button className="banner-button" variant="contained" color="primary" size="large" style={{backgroundColor: '#444484  ',color: '#ffffff'}}  onClick={() => window.open('https://stuy.enschool.org/apps/forms2/?f=51058', '_blank')}>
          REDIRECT
        </Button>
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
      <Box className="info-page">
      <Typography className="info-title">JPROM</Typography>
      <Typography className="info-text">Junior Prom will be on Wednesday, June 4, 2025 on the Spirit of New York 🛳 and the theme is Masquerade Ball 🌟. (no school the next day :)
      </Typography>
      <Typography className="info-text">The early bird special is now over. Tickets will now be sold at the regular price of $105.
      </Typography>
        <Typography>&nbsp;</Typography>
        <Box className="slideshow">
          <Carousel isJprom={true} className="slideshow-carousel" />
        </Box>
      </Box>
      <Box className="QNA">
          <Typography className="QNA-title">FAQs</Typography>
          {questionsAndAnswers.map((item, index) => (
            <Box key={index}>
              <Typography
                onClick={() => expandOnClick(index)}
                className={`QNA-question ${expandedQuestion === index ? "rotate-arrow" : ""}`}
              >
                {item.question}
              </Typography>
              <Collapse in={expandedQuestion === index}>
                <Typography className="QNA-answer">
                  {item.answer}
                </Typography>
              </Collapse>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="footer">
            <Contact />
          </Box>
    </Box>
  );
}
