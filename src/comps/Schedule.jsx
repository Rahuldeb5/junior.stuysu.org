import "./Schedule.css";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Data from "../data/schedules.json";
import Papa from "papaparse";

const Schedule = () => {
  const [minutes, setMinutes] = useState(5);
  const [currPeriod, setPeriod] = useState(5);
  const [dayType, setDayType] = useState("Regular");
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [AorBDay, setAorBDay] = useState("A");

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

  const periodTimes = getPeriodTimes(dayType);

  return (
    <Box className="schedule">
      <Box className="schedules-specifics">
        {getPeriods(getDayInfo(dayType)).map((period, index) => {
          return (
            <Box className="period-crawler-container" key={index}>
              <Box className="period-name">
                {period === currPeriod ? (
                  <Box></Box>
                ) : (
                  <Box sx={{ backgroundColor: "white" }}>{period}</Box>
                )}
              </Box>
              <Box className="period-time">{periodTimes[index]}</Box>
            </Box>
          );
        })}
      </Box>
      {/* FIX CSS: KALIMUL */}
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
  );
};

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
    case "Extended Homeroom":
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
      final.push(`After ${formatTime(info[i].startTime)}`);
    } else {
      const start = info[i].startTime;
      const end = new Date();
      end.setHours(parseInt(start.split(":")[0]));
      end.setMinutes(parseInt(start.split(":")[1]) + info[i].duration);
      final.push(
        `${formatTime(start)} - ${formatTime(
          `${end.getHours()}:${end.getMinutes()}`,
        )}`,
      );
    }
  }
  return final;
};

const formatTime = (time) => {
  let [hours, minutes] = time.split(":").map(Number);
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutes}`;
};

export default Schedule;
