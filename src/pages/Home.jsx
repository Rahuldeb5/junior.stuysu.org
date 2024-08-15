import "./Home.css";
import Navbar from "../comps/Navbar";
import Contact from "../comps/Contact";
import { Typography, Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from "../data/schedules.json";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import DateTimeDisplay from "../comps/DateTimeDisplay";
import { InstagramEmbed } from "react-social-media-embed";
import Calendar from "../comps/Calendar";

export default function Home() {
  const [minutes, setMinutes] = useState(5);
  const [currPeriod, setPeriod] = useState(5);
  const [dayType, setDayType] = useState("Regular");
  const [periodDuration, setPeriodDuration] = useState(40);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [AorBDay, setAorBDay] = useState("A");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [
    "/images/carousel1.png",
    "/images/carousel3.png",
    "/images/carousel4.png",
  ];

  const getCurrentPeriod = () => {
    const now = new Date();
    const cutoffStart = new Date();
    cutoffStart.setHours(8, 0, 0, 0);

    const cutoffEnd = new Date();
    cutoffEnd.setHours(15, 35, 0, 0);

    if (now < cutoffStart || now > cutoffEnd) {
      setMinutes(0);
      setMinutesLeft(0);
      setPeriod(null);
      setPeriodDuration(0);
      return;
    }

    now.setHours(now.getHours());
    now.setMinutes(now.getMinutes());
    const schedule = getDayInfo(dayType);
    const periods = getTimes(schedule);
    for (let i = 0; i < periods.length; i++) {
      const start = new Date();
      start.setHours(parseInt(schedule[i].startTime.split(":")[0]));
      start.setMinutes(parseInt(schedule[i].startTime.split(":")[1]));
      const diff = now.getTime() - start.getTime();
      if (diff > 0) {
        setMinutes(diff / 60000);
        setMinutesLeft(schedule[i].duration - diff / 60000);
        setPeriod(periods[i]);
        setPeriodDuration(schedule[i].duration);
      } else {
        break;
      }
    }
  };

  const fetchSheetsData = async () => {
    try {
      const ID = "1FfJxTXMbGEMKkS-pJtjZo9fVn4rn2e4fYNr4E7_wBPU";
      const sheet_name = "Schedule";
      const response = await fetch(
        `https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`,
      );
      const text = await response.text();
      const today = new Date();
      const parsedData = Papa.parse(text, { header: true }).data;
      setDayType(parsedData[today.getDay()].DayType);
      setAorBDay(parsedData[today.getDay()].AorBDay);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSheetsData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      getCurrentPeriod();
    }, 1000);

    return () => clearInterval(timer);
  }, [dayType]);

  const dayInfo = {
    dayType,
    minutes,
    minutesLeft,
    currPeriod,
    periodDuration,
    AorBDay,
  };

  const periodTimes = getPeriodTimes(dayType);

  return (
    <Box className="home-page">
      <Box className="navbar">
        <Navbar />
      </Box>
      <Box className="content" sx={{ flex: 1 }}>
        <Box className="title">
          <Typography variant="h1" align="left">
            Junior <br />
            Caucus
          </Typography>
        </Box>
        <Box className="slideshow">
          <Carousel responsive={responsive} className="carousel" infinite>
            {images.map((image, index) => (
              <Box key={index} className="image-container">
                <img src={image} alt={`Image ${index + 1}`} />
              </Box>
            ))}
          </Carousel>
        </Box>
        <Box className="date">
          <DateTimeDisplay />
        </Box>
        <Box className="schedule">
          <Box className="schedules-specifics">
            {getPeriods(getDayInfo(dayType)).map((period, index) => {
              return (
                <Box className="period-crawler-container" key={index}>
                  <Box className="period-name">
                    {period === currPeriod ? (
                      <Box sx={{ backgroundColor: "white" }}>{period}</Box>
                    ) : (
                      <Box>{period}</Box>
                    )}
                  </Box>
                  <Box className="period-time">{periodTimes[index]}</Box>
                </Box>
              );
            })}
          </Box>
          <Box className="time-left">
            <Typography variant="h4" color={"green"}>
              Time Into: {Math.round(minutes)}
            </Typography>
            <br />
            <Typography variant="h4" color={"red"}>
              Time Left: {Math.round(minutesLeft)}
            </Typography>
          </Box>
        </Box>

        <Box className="calendar">
          <Calendar />
        </Box>

        <Box className="magazine">
          <InstagramEmbed url="https://www.instagram.com/p/C-lwzBvPwGD/" />
        </Box>
      </Box>
      <Box className="footer">
        <Contact />
      </Box>
    </Box>
  );
}

const getTimes = (schedule) => {
  let names = [];
  for (let i = 0; i < schedule.length; i++) {
    names.push(schedule[i].name);
  }
  return names;
};

const getPeriods = (schedule) => {
  let names = [];
  for (let i = 0; i < schedule.length; i++) {
    if (!schedule[i].name.includes("Before Period")) {
      names.push(schedule[i].name);
    }
  }
  return names;
};

const getDayInfo = (DayType) => {
  switch (DayType) {
    case "Conference":
      return Data.Conference.schedule;
    case "Homeroom":
      return Data.Homeroom.schedule;
    case "Extended":
      return Data["Extended Homeroom"].schedule;
    case "Regular":
      return Data.Regular.schedule;
    default:
      return Data.Regular.schedule;
  }
};

const getPeriodTimes = (DayType) => {
  const info = getDayInfo(DayType);
  let final = [];

  for (let i = 0; i < info.length; i++) {
    if (info[i].name.includes("Before Period")) {
      continue;
    }
    if (i === 0) {
      final.push(`Before ${info[i + 1].startTime}`);
    } else if (i === info.length - 1) {
      final.push(`After ${info[i].startTime}`);
    } else {
      const start = info[i].startTime;
      const end = new Date();
      end.setHours(parseInt(start.split(":")[0]));
      end.setMinutes(parseInt(start.split(":")[1]) + info[i].duration);
      final.push(
        `${start} - ${end.getHours()}:${end.getMinutes() < 10 ? "0" + end.getMinutes() : end.getMinutes()}`,
      );
    }
  }
  return final;
};
