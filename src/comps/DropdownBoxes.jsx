import { useState } from "react";
import "./DropdownBoxes.css";
import { Box, Collapse, Typography } from "@mui/material";
import Data from "../data/magazines.json";

const DropdownBoxes = () => {
  const [openBox, setOpenBox] = useState(0);

  const handleToggle = (boxNumber) => {
    setOpenBox(openBox === boxNumber ? null : boxNumber);
  };

  const isMobile = window.innerWidth <= 430;
  const calculateMaxHeight = (length) => `${32 * length}em`;

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
          <Box className="dropdown"
            sx={{maxHeight: isMobile ? calculateMaxHeight(Data.juniorMagazines.length) : "none"}}>
            {Data.juniorMagazines.map((item, index) => (
              <Box key={index} className="dropdown-item">
                <Box className="dropdown-item-container">
                <Typography
                  className="monthTitle"
                  variant="h5"
                  style={{ backgroundColor: item.color, color: item.textcolor }}
                >
                  {item.title}
                </Typography>
                <object
                  className="magazine-pdf"
                  type="application/pdf"
                  data={item.url}
                  width="600em"
                  height="600em"
                />
                </Box>
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
          <Box className="dropdown"
            sx={{maxHeight: isMobile ? calculateMaxHeight(Data.sophomoreMagazines.length) : "none"}}>
            {Data.sophomoreMagazines.map((item, index) => (
              <Box key={index} className="dropdown-item">
                <Box className="dropdown-item-container">
                <Typography
                  className="monthTitle"
                  variant="h5"
                  style={{ backgroundColor: item.color, color: item.textcolor }}
                >
                  {item.title}
                </Typography>
                <embed
                  className="magazine-pdf"
                  src={item.url}
                  width="600em"
                  height="600em"
                />
                </Box>
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
      <Box
        className="freshman"
        sx={{ padding: 2, marginBottom: 2, cursor: "pointer" }}
        onClick={() => handleToggle(3)}
        align="center"
      >
        <Typography variant="h4" className="magazineTitle">
          Freshman Magazines
        </Typography>
        <Collapse in={openBox === 3}>
          <Box className="dropdown"
            sx={{maxHeight: isMobile ? calculateMaxHeight(Data.freshmanMagazines.length) : "none"}}>
            {Data.freshmanMagazines.map((item, index) => (
              <Box key={index} className="dropdown-item">
              <Box className="dropdown-item-container">

                <Typography
                  className="monthTitle"
                  variant="h5"
                  style={{ backgroundColor: item.color, color: item.textcolor}}
                >
                  {item.title}
                </Typography>
                <embed
                  className="magazine-pdf"
                  src={item.url}
                  width="600em"
                  height="600em"
                />
                  </Box>

              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default DropdownBoxes;
