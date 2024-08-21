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
    const hideMenu = () => {
      if (window.innerHeight > 768 && menuOpen) {
        toggleMenu();
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
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
        <Box className="menu">
          <Link
            href="/about"
            className={currPageGet(props.page, "About")}
            style={{ fontSize: "1.5rem" }}
          >
            About
          </Link>
          <Box className="nav-dropdown">
            <Link
              href="#"
              className="nav-menu-item"
              style={{ fontSize: "1.5rem" }}
            >
              Events
            </Link>
            <Box className="dropdown-content">
              <Link href="/jprom" className="nav-menu-item">
                Jprom
              </Link>
              <Link href="/other" className="nav-menu-item">
                Other
              </Link>
            </Box>
          </Box>

          <Box className="nav-dropdown">
            <Link
              href="#"
              className="nav-menu-item"
              style={{ fontSize: "1.5rem" }}
            >
              Resources
            </Link>
            <Box className="dropdown-content">
              <Link href="/newsletters" className="nav-menu-item">
                Newsletters
              </Link>
              <Link href="/guides" className="nav-menu-item">
                Guides
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const currPageGet = (page, currPage) => {
  return currPage === page ? "nav-menu-item current-page" : "nav-menu-item";
};

export default Navbar;
