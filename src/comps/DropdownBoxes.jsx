import { useState } from "react";
import "./DropdownBoxes.css";
import { Box, Collapse, Typography } from "@mui/material";

const DropdownBoxes = () => {
  const [openBox, setOpenBox] = useState(null);

  const handleToggle = (boxNumber) => {
    setOpenBox(openBox === boxNumber ? null : boxNumber);
  };

  const freshmanMagazines = [
    { url: "/pdfs/magazines/freshman/december.pdf#toolbar=0", title: "December" },
    { url: "/pdfs/magazines/freshman/january.pdf#toolbar=0", title: "January" },
    { url: "/pdfs/magazines/freshman/february.pdf#toolbar=0", title: "February" },
    { url: "/pdfs/magazines/freshman/march.pdf#toolbar=0", title: "March" },
    { url: "/pdfs/magazines/freshman/april.pdf#toolbar=0", title: "April" },
  ];

  const sophomoreMagazines = [
    { url: "/pdfs/magazines/sophomore/january.pdf#toolbar=0", title: "January" },
    { url: "/pdfs/magazines/sophomore/february.pdf#toolbar=0", title: "February" },
    { url: "/pdfs/magazines/sophomore/march.pdf#toolbar=0", title: "March" },
    { url: "/pdfs/magazines/sophomore/april.pdf#toolbar=0", title: "April" },
    { url: "/pdfs/magazines/sophomore/may.pdf#toolbar=0", title: "May" },
    { url: "/pdfs/magazines/sophomore/june.pdf#toolbar=0", title: "June" },
    { url: "/pdfs/magazines/sophomore/september.pdf#toolbar=0", title: "September" },
    { url: "/pdfs/magazines/sophomore/october.pdf#toolbar=0", title: "October" },
    { url: "/pdfs/magazines/sophomore/november.pdf#toolbar=0", title: "November" },
    { url: "/pdfs/magazines/sophomore/december.pdf#toolbar=0", title: "December" },
  ];

  const juniorMagazines = [];

  return (
    <Box className="dropdown-container">
      <Box
        className="junior"
        sx={{ padding: 2, marginBottom: 2, cursor: "pointer" }}
        onClick={() => handleToggle(1)}
      >
        <Typography variant="h4" className="magazineTitle">
          Junior Magazines
        </Typography>
        <Collapse in={openBox === 1}>
          <Box className="dropdown">
            {juniorMagazines.map((item, index) => (
              <Box key={index} className="dropdown-item">
                <Typography className="monthTitle" variant="h5">
                  {item.title}
                </Typography>
                <embed className="magazine-pdf" src={item.url} width="600em" height="600em" />
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
      <Box
        className="sophomore"
        sx={{ padding: 2, marginBottom: 2, cursor: "pointer" }}
        onClick={() => handleToggle(2)}
      >
        <Typography variant="h4" className="magazineTitle">
          Sophomore Magazines
        </Typography>
        <Collapse in={openBox === 2}>
          <Box className="dropdown">
            {sophomoreMagazines.map((item, index) => (
              <Box key={index} className="dropdown-item">
                <Typography className="monthTitle" variant="h5">
                  {item.title}
                </Typography>
                <embed className="magazine-pdf" src={item.url} width="600em" height="600em" />
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
      <Box
        className="freshman"
        sx={{ padding: 2, marginBottom: 2, cursor: "pointer" }}
        onClick={() => handleToggle(3)} align="center"
      >
        <Typography variant="h4" className="magazineTitle">
          Freshman Magazines
        </Typography>
        <Collapse in={openBox === 3}>
          <Box className="dropdown">
            {freshmanMagazines.map((item, index) => (
              <Box key={index} className="dropdown-item">
              <Typography className="monthTitle" variant="h5">
                {item.title}
              </Typography>
                <embed className="magazine-pdf" src={item.url} width="600em" height="600em" />
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default DropdownBoxes;
