import React, { useState } from "react";
import { Box, makeStyles, Tooltip, Typography } from "@material-ui/core";
import { Calendar, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment";

import "moment/locale/en-ca";

const useStyles = makeStyles((theme) => ({
  dayWithDotContainer: {
    position: "relative",
  },
  dayWithDot: {
    position: "absolute",
    height: 30,
    width: 30,
    borderRadius: "50%",
    top: "4px",
    left: "10%",
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const CustomCalendar = ({ events, allEvents }) => {
  const classes = useStyles();
  const [selectDate, setSelectDate] = useState(moment(events[0]));

  const renderDayInPicker = (
    date,
    selectedDate,
    dayInCurrentMonth,
    dayComponent
  ) => {
    if (events.includes(date.format("YYYY/MM/DD"))) {
      const selectEvent = allEvents.find(
        (item) =>
          moment(item.start).format("YYYY/MM/DD") === date.format("YYYY/MM/DD")
      );
      return (
        <Tooltip
          title={
            <Box>
              <Typography>{selectEvent.summary}</Typography>
              <Typography>{selectEvent.description}</Typography>
              <Typography>
                Start Date:{" "}
                {moment(selectEvent.start).format("YYYY/MM/DD HH:mm")}
              </Typography>
              <Typography>
                End Date: {moment(selectEvent.end).format("YYYY/MM/DD HH:mm")}
              </Typography>
            </Box>
          }
        >
          <div className={classes.dayWithDotContainer}>
            {dayComponent}
            <div className={classes.dayWithDot} />
          </div>
        </Tooltip>
      );
    }

    return dayComponent;
  };

  return (
    <MuiPickersUtilsProvider
      libInstance={moment}
      utils={MomentUtils}
      locale="en-ca"
    >
      <Calendar
        date={selectDate}
        renderDay={renderDayInPicker}
        variant={"dialog"}
        onChange={setSelectDate}
        showTodayButton
      />
    </MuiPickersUtilsProvider>
  );
};

export default CustomCalendar;
