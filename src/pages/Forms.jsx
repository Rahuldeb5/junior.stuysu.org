import { Box } from "@mui/material";
import GuideCard from "../comps/GuideCard";
import Navbar from "../comps/Navbar";
import Form from "../data/jpromForms.json";
import "./Forms.css";

export default function Forms() {
  return (
    <Box className="forms-page">
      <Box className="navbar">
        <Navbar {...{ page: "Forms" }} />
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
