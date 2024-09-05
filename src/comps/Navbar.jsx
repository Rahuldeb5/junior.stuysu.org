import React from "react";
import "./Navbar.css";
import { useState, useEffect, useCallback } from "react";
import { Box, Link } from "@mui/material";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        if (!menuOpen) {
          toggleMenu();
        }
      } else {
        if (menuOpen) {
          toggleMenu();
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen, toggleMenu]);

  return (
    <Box className="head-nav">
      <Box className="nav-container">
        <Box className="logo-container" sx={{ width: "15%" }}>
          <Link href="/">
            <img
              src="/images/JuniorCaucus.png"
              alt="Logo"
              className="junior-logo nav-menu-item"
            />
          </Link>
        </Box>
        {!menuOpen ?
        <Box className="menu">
          <Link
            href="/people"
            className="nav-menu-item"
            style={{ fontSize: "1.75rem" }}
          >
            People
          </Link>
          <Box className="nav-dropdown">
            Events
            <Box className="dropdown-content">
              <Link href="/jprom" className="nav-menu-item">
                JProm
              </Link>
              <Link href="/other" className="nav-menu-item">
                Other
              </Link>
            </Box>
          </Box>

          <Box className="nav-dropdown">
            Resources
            <Box className="dropdown-content">
              <Link href="/newsletters" className="nav-menu-item">
                Newsletters
              </Link>
              <Link href="/guides" className="nav-menu-item">
                Guides
              </Link>
            </Box>
          </Box>

          <Link
            href="/magazines"
            className="nav-menu-item"
            style={{ fontSize: "1.75rem" }}
          >
            Magazines
          </Link>
        </Box>
        :
        <Box className="menu">
          <Box className="nav-dropdown">
            <img className="menu-button" src="/images/menu-button.png" />
            <Box className="dropdown-content">
              <Link href="/people" className="nav-menu-item">
                People
              </Link>
              <Link href="/jprom" className="nav-menu-item">
                JProm
              </Link>
              <Link href="/other" className="nav-menu-item">
                Events
              </Link>
              <Link href="/newsletters" className="nav-menu-item">
                Newsletters
              </Link>
              <Link href="/guides" className="nav-menu-item">
                Guides
              </Link>
              <Link href="/magazines" className="nav-menu-item">
                Magazines
              </Link>
            </Box>
          </Box>
        </Box>
        }
      </Box>
    </Box>
  );
};

export default Navbar;
