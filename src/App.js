import {
  Box,
  Button,
  Divider,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Events from "./components/Events";
import { postCalendar } from "./services/calendar";
import "./styles.css";
export default function App() {
  const airbnb = "https://www.airbnb.com.ec/calendar/ical/XXXX.ics?s=XXX";
  const poli = "https://yourinstitution.com/calendar/export_execute.php";

  const [url, setUrl] = useState("");
  const [events, setEvents] = useState([
    {
      type: "VEVENT",
      params: [],
      end: "2020-12-02T05:15:00.000Z",
      start: "2020-12-02T05:15:00.000Z",
      datetype: "date",
      uid: "6fec1092d3fa-f5e536ddc26a126623f9c531cf84448b@airbnb.com",
      summary: "Go to store",
    },
    {
      type: "VEVENT",
      params: [],
      end: "2020-12-04T05:12:00.000Z",
      start: "2020-12-04T05:11:00.000Z",
      datetype: "date",
      uid: "6fec1092d3fa-ed3a6db52dc0c3c765e716631f0c4118@airbnb.com",
      summary: "Meeting",
    },
    {
      type: "VEVENT",
      params: [],
      end: "2020-12-21T05:19:00.000Z",
      start: "2020-12-21T05:09:00.000Z",
      datetype: "date",
      uid: "6fec1092d3fa-898bddf0080ba9d7f4eb80e38ef69b6e@airbnb.com",
      summary: "Other meeting",
    },
    {
      type: "VEVENT",
      params: [],
      end: "2021-12-30T05:12:00.000Z",
      start: "2020-12-30T05:11:00.000Z",
      datetype: "date",
      uid: "6fec1092d3fa-19f2218ed870322e11ad3e0d5f669095@airbnb.com",
      summary: "Jhon's birthday",
    },
  ]);
  const onSyncCalendar = async () => {
    if (url) {
      const { calendar } = await postCalendar(url);
      setEvents(calendar);
      setUrl("");
    }
  };
  return (
    <div>
      <Typography variant="h3">Example Sync Calendar</Typography>
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://github.com/CrisRonda?tab=repositories"
      >
        <Typography variant="caption">My Github Page</Typography>
      </Link>
      <Divider />
      <Typography>Add your calendar link</Typography>
      <Typography>
        <strong>Examples</strong>
      </Typography>
      <Typography>
        <br />
        <strong>Arbnb:</strong> {airbnb}
        <br />
        <strong>Other:</strong> {poli}
      </Typography>
      <TextField
        fullWidth
        style={{
          alignSelf: "center",
          display: "block",
          minWidth: 200,
          margin: "16px 8px",
        }}
        label="You URL"
        variant="outlined"
        value={url}
        onChange={({ target: { value } }) => setUrl(value)}
        placeholder="https://yourcalendar/calendar/example.ics"
      />
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={onSyncCalendar}>
          Sync Calendar
        </Button>
      </Box>
      <Events events={events} />
    </div>
  );
}
