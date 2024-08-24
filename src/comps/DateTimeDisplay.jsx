import "./DateTimeDisplay.css";
import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = new useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = daysOfWeek[currentDateTime.getDay()];

  const date = currentDateTime.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const time = currentDateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <Box>
      <Typography className="day" variant="p" align="left">
        {day + ", "}
      </Typography>
      <Typography className="date" variant="p" align="left">
        {date + " "}
      </Typography>
      <br />
      <Typography className="time" variant="p" align="left">
        {time + " "}
      </Typography>
    </Box>
  );
};

export default DateTimeDisplay;
