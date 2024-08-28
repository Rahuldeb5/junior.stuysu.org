import { Box, Collapse, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import "../pages/Newsletters.css";
import newsletters from "../data/newsletters.json";

export default function NewslettersData() {
  const [openBox, setOpenBox] = useState(null);

  const handleToggle = (boxNumber) => {
    setOpenBox(openBox === boxNumber ? null : boxNumber);
  };

  const firstElement = newsletters[newsletters.length - 1];
  let pastNewsletters = newsletters.slice(0, -1);

  return (
    <Box className="newsletters-container">
      <Typography variant="h1" className="newsletters-title">
        Newsletters
      </Typography>
      <Box className="newsletters-list">
        <Box className="initial-newsletter-item">
          <Box className="latest-newsletter-item">
            <Box className="latest-title-div">
              <Typography variant="h2" className="latest-title">
                <u> Latest News: {firstElement.title} </u>
              </Typography>
            </Box>
            <Box className="latest-embed-blurb-div">
              <iframe
                className="latest-newsletter-embed"
                src={firstElement.pdf}
                width="600em"
                height="600em"
              ></iframe>
              <Typography className="latest-newsletter-blurb">
                {firstElement.blurb}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="old-newsletters"
        sx={{ padding: 2, marginBottom: 2, cursor: "pointer" }}
        onClick={() => handleToggle(1)}
      >
        <Typography variant="h2" className="magazineTitle">
          Past Newsletters
        </Typography>
        <Collapse in={openBox === 1}>
          <Box className="dropdown">
            {pastNewsletters.slice().reverse().map((item) => (
              <Box className="module">
                <Box className="newsletter-item">
                  <Box className="newsletter-title-blurb">
                    <Typography variant="h3" className="newsletter-title">
                      {item.title}
                    </Typography>
                    <Typography className="newsletter-blurb">
                      {item.blurb}
                    </Typography>
                  </Box>
                  <embed src={item.pdf} width="600em" height="600em" />
                </Box>
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}
