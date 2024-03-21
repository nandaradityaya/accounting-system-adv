/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";
// import { addDays } from "date-fns";
import { IoCalendarClear } from "react-icons/io5";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangeSelect = ({ label }) => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap">
      <label className="form-label" htmlFor="dateRangeSelect">
        {label}
      </label>
      <div className="input-group">
        <input
          value={
            range[0].startDate && range[0].endDate
              ? `${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
                  range[0].endDate,
                  "MM/dd/yyyy"
                )}`
              : ""
          }
          className="form-control"
          onClick={() => setOpen((open) => !open)}
          id="dateRangeSelect"
          placeholder="mm/dd/yyyy"
        />
        <div
          className="input-group-append"
          onClick={() => setOpen((open) => !open)}
        >
          <span className="input-group-text">
            <IoCalendarClear />
          </span>
        </div>
      </div>

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangeSelect;
