import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../comps/Navbar";
import "./Cruise.css";

export default function Cruise() {
  const contentRefs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const textContent = [
    {
      title: "CHELSEA PIERS",
      body: "Completed in 1910 as a passenger ship terminal, it was supposed to be the destination of the ill-fated oceanliner Titanic. After years of disrepair, it was turned into a sports and entertainment complex in the mid-1990s and serves as the New York dock for Spirit Cruises, Bateaux New York and Atlantica.",
      image: "/images/chelsea_piers.png",
    },
    {
      title: "EMPIRE STATE BUILDING",
      body: "This impressive 1,250-feet tower opened in 1923 and was the world’s tallest building for 30 years. It's currently the 4th tallest building in New York City, the 6th tallest in the United States, and the 43rd tallest tower in the world.",
      image: "/images/empire-state.png",
    },
    {
      title: "VESSEL AT HUDSON YARDS",
      body: "Hudson Yards is New York’s newest neighborhood and home to more than 100 diverse shops and culinary experiences, offices for leaders in industry, significant public art and dynamic cultural institutions. The extraordinary centerpiece of Hudson Yards is its spiral staircase, a soaring new landmark meant to be climbed. This interactive artwork was imagined by Thomas Heatherwick and Heatherwick Studio.",
      image: "/images/hudson-yards.png",
    },
    {
      title: "CHRYSLER BUILDING",
      body: "A classic example of Art Deco architecture and considered by many contemporary architects to be one of the finest buildings in NYC. At 1,046 feet, the structure was the world’s tallest building for 11 months before it was surpassed by the Empire State Building. It was the headquarters for Chrysler from 1930 until the mid-1950s.",
      image: "/images/chrysler-building.png",
    },
    {
      title: "WORLD TRADE CENTER SITE",
      body: "The National September 11 Memorial features two reflecting pools set within the footprint of the World Trade Center’s twin towers and the 3000 names of those who lost their lives in terrorist attacks at this landmark.",
      image: "/images/world-trade-center-site.png",
    },
    {
      title: "BATTERY PARK CITY",
      body: "Battery Park City is a planned mixed-use community in Lower Manhattan, built on 92 acres of landfill from the excavation of the World Trade Center site in the late 1960s and early 1970s. Established in 1977, it features residential and commercial buildings, green spaces, waterfront promenades, and cultural landmarks, making it one of New York City's most desirable neighborhoods.",
      image: "/images/battery-park-city.png",
    },
    {
      title: "BATTERY PARK",
      body: "Called “The Battery” by New Yorkers, this 20-acre park at the southern tip of Manhattan was originally the site of early Dutch fortifications in the 1600s. Its name originated from the battery of cannons installed there by the British during Colonial times.",
      image: "/images/battery-park.png",
    },
    {
      title: "SOUTH STREET SEAPORT",
      body: "Dating back to the 1600s, South Street and its Seaport District were once the world’s gateway to New York City and America. After nearly a century of decay, the district was redeveloped in the 1960s into a vibrant commercial area filled with shops, restaurants, offices and the South Street Seaport Museum.",
      image: "/images/south-street-seaport.png",
    },
    {
      title: "BROOKLYN BRIDGE",
      body: "Regarded as one of the greatest architectural achievements of all time, it was designed by John Augustus Roebling and was constructed between 1869 and 1883.",
      image: "/images/brooklyn-bridge.png",
    },
    {
      title: "BROOKLYN HEIGHTS",
      body: "Considered New York’s first suburb when it was developed in the 1820s, this charming residential section across the East River from Manhattan was originally accessible by steam ferry. It was declared New York’s first landmark district in 1963.",
      image: "/images/brooklyn-heights.png",
    },
    {
      title: "MANHATTAN BRIDGE",
      body: "The last of the three suspension bridges built across the lower East River. The lower level has three lanes, four subway tracks, a walkway and a bikeway. The upper level, originally used for streetcars, has two lanes in each direction.",
      image: "/images/manhattan-bridge.png",
    },
    {
      title: "WILLIAMSBURG BRIDGE",
      body: "At the time it was constructed, it set the record for the longest suspension bridge span on Earth. This bridge is among only two suspension bridges in New York City that still carry both automobile and rail traffic.",
      image: "/images/williamsburg-bridge.png",
    },
    {
      title: "GOVERNORS ISLAND",
      body: "These 173 acres were under military command from the 1700s through 1996, making it the oldest continuously operated military post in U.S. history.",
      image: "/images/governors-island.png",
    },
    {
      title: "STATUE OF LIBERTY",
      body: "A gift to the people of America from the people of France, “Liberty Enlightening the World” stands 300 feet above New York Harbor. She was built by sculptor Frederic Auguste Bartholdi.",
      image: "/images/statue-of-liberty.png",
    },
    {
      title: "ELLIS ISLAND",
      body: "Nearly 17 million immigrants were processed here between 1892 and 1957.",
      image: "/images/ellis-island.png",
    },
    {
      title: "CENTRAL RAILROAD OF NEW JERSEY TERMINAL",
      body: "Located at the north end of Liberty State Park, this beautiful 1892 structure was in operation until 1954. Over one half of the new arrivals at Ellis Island passed through this railroad terminal on their way to new lives across the United States.",
      image: "/images/central-railroad-terminal.png",
    },
    {
      title: "COLGATE CLOCK",
      body: "This stately timepiece once graced the Colgate Palmolive plant. When the factory was demolished in the 1980s, the clock remained.",
      image: "/images/colgate-clock.png",
    },
  ];
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -20% 0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setVisibleIndexes((prev) => {
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    contentRefs.current.forEach((box, index) => {
      if (box) {
        box.setAttribute("data-index", index);
        observer.observe(box);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box>
      <Box className="navbar">
        <Navbar {...{ page: "Jprom" }} />
      </Box>
      <Box className="cruise-page">
        <Typography className="route-title">CRUISE ROUTE</Typography>
        <Box className="route-image-container">
          <img src="/images/route.png" alt="Route" className="route-image" />
          <img
            src="/images/route-info.png"
            alt="Route Info"
            className="route-info-image"
          />
        </Box>
        {textContent.map((item, index) => (
          <Box
            key={index}
            ref={(el) => (contentRefs.current[index] = el)}
            className={`text-box ${visibleIndexes.includes(index) ? "visible" : "hidden"} ${index % 2 === 0 ? "left" : "right"}`}
          >
            {index % 2 === 0 && (
              <img
                src={item.image}
                alt={item.title}
                className="text-box-image"
                loading="lazy"
              />
            )}
            <div className="text-box-content">
              <Typography className="text-box-title">{item.title}</Typography>
              <Typography className="text-box-body">{item.body}</Typography>
            </div>
            {index % 2 !== 0 && (
              <img
                src={item.image}
                alt={item.title}
                className="text-box-image"
                loading="lazy"
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
