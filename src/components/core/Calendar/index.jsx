import React from "react";
import { getCalendarData } from "./helpers.calndar";

import "./style.scss";

const Calendar = () => {
  const date = getCalendarData();
  console.log("date", date.cels);
  return (
    <div className="calendar_content_wrapper">
      <div className="calendar_navbar"></div>
      <div className="calendar_days">WeekDays</div>
      <div className="calendar_cells">WeekDays</div>
    </div>
  );
};

export default Calendar;
