import React from "react";
import Calendar from "../Calendar";
import moment from "moment";
import {
  Box,
  Card,
  CardContent,
  colors,
  Divider,
  Typography,
} from "@material-ui/core";

const getStringDate = (date) => new Date(date).toLocaleString();

const Events = ({ events = [] }) => {
  const existEvents = events.length > 0;
  if (existEvents) {
    const formatEvents = events.map((event) =>
      moment(event.start).format("YYYY/MM/DD")
    );
    return (
      <>
        <Typography variant="h4">Events</Typography>
        <Divider />
        <Box display="flex" flexWrap="wrap" justifyContent="center" my={2}>
          {events.map(({ description, start, end, lastmodified, summary }) => (
            <Card style={{ margin: 4, backgroundColor: colors.grey[400] }}>
              <CardContent>
                <Typography>{`Titulo: ${summary}`}</Typography>
                <Typography>{`Descripción: ${description}`}</Typography>
                <Typography>{`Fecha de inicio: ${getStringDate(
                  start
                )}`}</Typography>
                <Typography>{`Fecha de Fin: ${getStringDate(end)}`}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Calendar events={formatEvents} allEvents={events} />
      </>
    );
  }

  return (
    <>
      <p>No existen eventos</p>
    </>
  );
};
export default Events;
