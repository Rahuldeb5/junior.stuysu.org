import React, { useState, useEffect } from "react";
import "./RandomQuote.css";
import Quotes from "../data/quotes.json";
import { Box, Typography } from "@mui/material";

const RandomQuote = () => {
  const [currentQuote, setCurrentQuote] = useState("");
  const [fadeClass, setFadeClass] = useState("");

  const getRandomQuote = () => {
    const quotesArray = Quotes.juniorYearQuotes || [];
    const quotesLength = quotesArray.length;

    if (quotesLength === 0) {
      return "No quotes available.";
    }

    const randomIndex = Math.floor(Math.random() * quotesLength);
    return quotesArray[randomIndex];
  };

  useEffect(() => {
    setCurrentQuote(getRandomQuote());

    const interval = setInterval(() => {
      setFadeClass("fade-out");

      setTimeout(() => {
        setCurrentQuote(getRandomQuote());
        setFadeClass("");
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={`random-quote ${fadeClass}`}>
      <Typography className="typography" variant="body1">
        {currentQuote}
      </Typography>
    </Box>
  );
};

export default RandomQuote;
