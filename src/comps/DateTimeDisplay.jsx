import { Box, Typography } from "@mui/material";
import React from "react";

const DateTimeDisplay = () => {
  const currentDateTime = new Date();

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
      <Typography variant="p" align="left">
        {day}
      </Typography>
      <Typography variant="p" align="left">
        {date}
      </Typography>
      <Typography variant="p" align="left">
        {time}
      </Typography>
    </Box>
  );
};

export default DateTimeDisplay;
