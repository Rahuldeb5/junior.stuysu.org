import { Box, Typography, Link } from "@mui/material";
import Navbar from "../comps/Navbar";
import "./OtherEvents.css";

export default function OtherEvents() {
  return (
    <Box className="other-page">
      <Box className="navbar">
        <Navbar {...{ page: "OtherEvents" }} />
      </Box>
      <Box className="content">
        <Box className="info">
          <Typography
            variant="h1"
            className="otherevents-title"
            style={{ fontFamily: "Baskervville SC" }}
          >
            No Events Yet!
          </Typography>
        </Box>
        <Link href={"https://forms.gle/qmo1yvGz1bVNkSdd8"} className="event-link" target="_blank">
        <Box className="events-card">
            <Box className="event-head">
              <Typography
                variant="h1"
                className="event-title"
                style={{ fontFamily: "Baskervville SC" }}
              >
                Events Preference Form
              </Typography>
            </Box>
            <Typography
              variant="p"
              className="event-blurb"
              style={{ fontFamily: "New Amsterdam" }}
            >
              Rank the top three caucus events you want to happen most to least.
            </Typography>
        </Box>
        </Link>
        <Link href={"https://forms.gle/RBzPQirb6jdtM2TFA"} className="event-link" target="_blank">
        <Box className="events-card">
            <Box className="event-head">
              <Typography
                variant="h1"
                className="event-title"
                style={{ fontFamily: "Baskervville SC" }}
              >
                College Newsletter Suggestions
              </Typography>
            </Box>
            <Typography
              variant="p"
              className="event-blurb"
              style={{ fontFamily: "New Amsterdam" }}
            >
              Fill out the form below so we can improve these newsletters and help you discover what colleges will be the fit for you!
            </Typography>
        </Box>
        </Link>
      </Box>
    </Box>
  );
}
