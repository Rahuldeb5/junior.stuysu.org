import "./About.css";
import { Box, Typography } from "@mui/material";
import Navbar from "../comps/Navbar";
import Info from "../data/people.json";
import Contact from "../comps/Contact";
// import Contact from "../comps/Contact";

export default function About() {
  return (
    <Box className="about-page">
      <Box className="navbar">
        <Navbar {...{ page: "About" }} />
      </Box>

      <Box className="content">
        <Box className="presidents">
          <Typography
            className="copresidents"
            variant="h1"
            style={{ fontFamily: "Baskervville SC" }}
          >
            Co-Presidents
          </Typography>
          <Box className="box-item">
            <Box className="sub-box">
              <img
                src={Info.Presidents[0].img}
                style={{ width: "100%", height: "auto" }}
                alt="about person"
              />
              <Typography
                className="name-typography"
                variant="h4"
                sx={{ textAlign: "center" }}
                style={{ fontFamily: "Baskervville SC" }}
              >
                {Info.Presidents[0].name}
              </Typography>
              <Typography
                className="typography"
                variant="body1"
                sx={{ textAlign: "center" }}
              >
                {Info.Presidents[0].bio}
              </Typography>
            </Box>
            <Box className="sub-box">
              <img
                src={Info.Presidents[1].img}
                style={{ width: "100%", height: "auto" }}
                alt="about person"
              />
              <Typography
                className="name-typography"
                variant="h4"
                sx={{ textAlign: "center" }}
                style={{ fontFamily: "Baskervville SC" }}
              >
                {Info.Presidents[1].name}
              </Typography>
              <Typography
                className="typography"
                variant="body1"
                sx={{ textAlign: "center" }}
              >
                {Info.Presidents[1].bio}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="backgroundInsert3">
          <Box className="chiefStaff">
            <Typography className="title-typography" variant="h1">
              Chief of Staff
            </Typography>
            <Box className="box-item">
              <Box className="sub-box">
                <img
                  src={Info.chiefOfStaff[0].img}
                  style={{ width: "100%", height: "auto" }}
                  alt="about person"
                />
                <Typography
                  className="name-typography"
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  style={{ fontFamily: "Baskervville SC" }}
                >
                  {Info.chiefOfStaff[0].name}
                </Typography>
                <Typography
                  className="typography"
                  variant="body1"
                  sx={{ textAlign: "center" }}
                >
                  {Info.chiefOfStaff[0].bio}
                </Typography>
              </Box>
              <Box className="sub-box">
                <img
                  src={Info.chiefOfStaff[1].img}
                  style={{ width: "100%", height: "auto" }}
                  alt="about person"
                />
                <Typography
                  className="name-typography"
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  style={{ fontFamily: "Baskervville SC" }}
                >
                  {Info.chiefOfStaff[1].name}
                </Typography>
                <Typography
                  className="typography"
                  variant="body1"
                  sx={{ textAlign: "center" }}
                >
                  {Info.chiefOfStaff[1].bio}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="backgroundInsert4">
          <Box className="events">
            <Typography className="title-typography" variant="h1">
              Events
            </Typography>
            <Box className="box-item">
              <Box className="sub-box">
                <img
                  src={Info.Events[0].img}
                  style={{ width: "100%", height: "auto" }}
                  alt="about person"
                />
                <Typography
                  className="name-typography"
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  style={{ fontFamily: "Baskervville SC" }}
                >
                  {Info.Events[0].name}
                </Typography>
                <Typography
                  className="typography"
                  variant="body1"
                  sx={{ textAlign: "center" }}
                >
                  {Info.Events[0].bio}
                </Typography>
              </Box>
              <Box className="sub-box">
                <img
                  src={Info.Events[1].img}
                  style={{ width: "100%", height: "auto" }}
                  alt="about person"
                />
                <Typography
                  className="name-typography"
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  style={{ fontFamily: "Baskervville SC" }}
                >
                  {Info.Events[1].name}
                </Typography>
                <Typography
                  className="typography"
                  variant="body1"
                  sx={{ textAlign: "center" }}
                >
                  {Info.Events[1].bio}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="backgroundInsert8">
          <Box className="internals">
            <Typography className="title-typography" variant="h1">
              Internals
            </Typography>
            <Box className="box-item">
              <Box className="sub-box">
                <img
                  src={Info.Internals[0].img}
                  style={{ width: "100%", height: "auto" }}
                  alt="about person"
                />
                <Typography
                  className="name-typography"
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  style={{ fontFamily: "Baskervville SC" }}
                >
                  {Info.Internals[0].name}
                </Typography>
                <Typography
                  className="typography"
                  variant="body1"
                  sx={{ textAlign: "center" }}
                >
                  {Info.Internals[0].bio}
                </Typography>
              </Box>
              <Box className="sub-box">
                <img
                  src={Info.Internals[1].img}
                  style={{ width: "100%", height: "auto" }}
                  alt="about person"
                />
                <Typography
                  className="name-typography"
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  style={{ fontFamily: "Baskervville SC" }}
                >
                  {Info.Internals[1].name}
                </Typography>
                <Typography
                  className="typography"
                  variant="body1"
                  sx={{ textAlign: "center" }}
                >
                  {Info.Internals[1].bio}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="backgroundInsert9">
          <Box className="it">
            <Typography className="title-typography" variant="h1">
              I/T
            </Typography>
            <Box className="box-IT">
              <Box className="sub-box">
                <img
                  src={Info.IT[0].img}
                  style={{ width: "100%", height: "auto" }}
                  alt="about person"
                />
                <Typography
                  className="name-typography"
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  style={{ fontFamily: "Baskervville SC" }}
                >
                  {Info.IT[0].name}
                </Typography>
                <Typography
                  className="typography"
                  variant="body1"
                  sx={{ textAlign: "center" }}
                >
                  {Info.IT[0].bio}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="backgroundInsert5">
            <Box className="finance">
              <Typography className="title-typography" variant="h1">
                Finance
              </Typography>
              <Box className="box-item">
                <Box className="sub-box">
                  <img
                    src={Info.Finance[0].img}
                    style={{ width: "100%", height: "auto" }}
                    alt="about person"
                  />
                  <Typography
                    className="name-typography"
                    variant="h4"
                    sx={{ textAlign: "center" }}
                    style={{ fontFamily: "Baskervville SC" }}
                  >
                    {Info.Finance[0].name}
                  </Typography>
                  <Typography
                    className="typography"
                    variant="body1"
                    sx={{ textAlign: "center" }}
                  >
                    {Info.Finance[0].bio}
                  </Typography>
                </Box>
                <Box className="sub-box">
                  <img
                    src={Info.Finance[1].img}
                    style={{ width: "100%", height: "auto" }}
                    alt="about person"
                  />
                  <Typography
                    className="name-typography"
                    variant="h4"
                    sx={{ textAlign: "center" }}
                    style={{ fontFamily: "Baskervville SC" }}
                  >
                    {Info.Finance[1].name}
                  </Typography>
                  <Typography
                    className="typography"
                    variant="body1"
                    sx={{ textAlign: "center" }}
                  >
                    {Info.Finance[1].bio}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="backgroundInsert6">
          <Box className="graphics">
            <Typography className="title-typography" variant="h1">
              Graphics
            </Typography>
            <Box className="box-item">
              <Box className="sub-box">
                <img
                  src={Info.Graphics[0].img}
                  style={{ width: "100%", height: "auto" }}
                  alt="about person"
                />
                <Typography
                  className="name-typography"
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  style={{ fontFamily: "Baskervville SC" }}
                >
                  {Info.Graphics[0].name}
                </Typography>
                <Typography
                  className="typography"
                  variant="body1"
                  sx={{ textAlign: "center" }}
                >
                  {Info.Graphics[0].bio}
                </Typography>
              </Box>
              <Box className="sub-box">
                <img
                  src={Info.Graphics[1].img}
                  style={{ width: "100%", height: "auto" }}
                  alt="about person"
                />
                <Typography
                  className="name-typography"
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  style={{ fontFamily: "Baskervville SC" }}
                >
                  {Info.Graphics[1].name}
                </Typography>
                <Typography
                  className="typography"
                  variant="body1"
                  sx={{ textAlign: "center" }}
                >
                  {Info.Graphics[1].bio}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="backgroundInsert7">
          <Box className="outreach">
            <Typography className="title-typography" variant="h1">
              Outreach
            </Typography>
            <Box className="box-item">
              <Box className="sub-box">
                <img
                  src={Info.Outreach[0].img}
                  style={{ width: "100%", height: "auto" }}
                  alt="about person"
                />
                <Typography
                  className="name-typography"
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  style={{ fontFamily: "Baskervville SC" }}
                >
                  {Info.Outreach[0].name}
                </Typography>
                <Typography
                  className="typography"
                  variant="body1"
                  sx={{ textAlign: "center" }}
                >
                  {Info.Outreach[0].bio}
                </Typography>
              </Box>
              <Box className="sub-box">
                <img
                  src={Info.Outreach[1].img}
                  style={{ width: "100%", height: "auto" }}
                  alt="about person"
                />
                <Typography
                  className="name-typography"
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  style={{ fontFamily: "Baskervville SC" }}
                >
                  {Info.Outreach[1].name}
                </Typography>
                <Typography
                  className="typography"
                  variant="body1"
                  sx={{ textAlign: "center" }}
                >
                  {Info.Outreach[1].bio}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
