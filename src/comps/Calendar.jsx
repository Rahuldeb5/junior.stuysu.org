import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import events from "../data/events.json";
import { useNavigate } from "react-router-dom";
import "./Calendar.css";

const Calendar = () => {
  const navigate = useNavigate();

  const handleEventClick = (clickInfo) => {
    navigate("/other");
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        start: "prev",
        center: "title",
        end: "next",
      }}
      weekends={true}
      events={events}
      eventColor="#0e2b54"
      eventTextColor="white"
      height={600}
      eventClick={handleEventClick}
    />
  );
};

export default Calendar;
