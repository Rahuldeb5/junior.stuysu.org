import { Box } from "@mui/material";
import GuideCard from "../comps/GuideCard";
import Navbar from "../comps/Navbar";
import Guide from "../data/guides.json";
import "./Guides.css";

export default function Guides() {
  return (
    <Box className="guides-page">
      <Box className="navbar">
        <Navbar {...{ page: "Guides" }} />
      </Box>
      <Box className="content">
        <Box className="guides-super">
          <Box className="guides-container">
            {Guide.slice()
              .reverse()
              .map((guide) => (
                <GuideCard
                  title={guide.title}
                  link={guide.link}
                  date={guide.date}
                  blurb={guide.blurb}
                />
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
