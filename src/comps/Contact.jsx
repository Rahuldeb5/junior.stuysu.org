import React from "react";
import "./Contact.css";
import { Box, Link, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box className="footer">
      <Typography variant="body1" align="center">
        © 2024 Junior Caucus.
      </Typography>
      <Typography variant="body1" align="center">
        Co-Presidents: 
        <Link href="mailto:vlei60@stuy.edu" color="inherit" sx={{ textDecoration: "none" }}> Vanna Lei </Link>
        &
        <Link href="mailto:pzhang60@stuy.edu" color="inherit" sx={{ textDecoration: "none" }}> Philip Zhang </Link>
      </Typography>
      <Typography variant="body1" align="center">
        Chief of Staff: 
        <Link href="mailto:azhou60@stuy.edu" color="inherit" sx={{ textDecoration: "none" }}> Amy Zhou </Link>
        &
        <Link href="mailto:kchen60@stuy.edu" color="inherit" sx={{ textDecoration: "none" }}> Kelly Chen </Link>
      </Typography>
      <Typography variant="body1" align="center">
        Development Lead: 
        <Link href="mailto:rdeb60@stuy.edu" color="inherit" sx={{ textDecoration: "none" }}> Rahul Deb </Link>
      </Typography>
    </Box>
  );
};

export default Contact;
