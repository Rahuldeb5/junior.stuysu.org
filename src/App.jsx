import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Menu } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import Jprom from "./pages/Jprom";
import OtherEvents from "./pages/OtherEvents";
import Newsletters from "./pages/Newsletters";
import Guides from "./pages/Guides";
import Magazines from "./pages/Magazines";
import Error from "./pages/Error";
import Cruise from "./pages/Cruise";
import Forms from "./pages/Forms";
import JpromMenu from "./pages/JpromMenu";
import NewJprom from "./pages/NewJprom";

const App = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box style={{ height: windowHeight }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/people" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/route" element={<Cruise />} />
          <Route path="/other" element={<OtherEvents />} />
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/magazines" element={<Magazines />} />
          <Route path="/error" element={<Error />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/menu" element={<JpromMenu />} />
          <Route path="/jprom" element={<NewJprom />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
