import axios from "axios";
const baseURL = "http://localhost:3001/";

export const getCalendar = async () => {
  const res = await axios.get(baseURL + "getCalendar");
  const { data } = res;
  return data;
};
export const postCalendar = async (url) => {
  if (url) {
    const res = await axios.post(baseURL + "syncCalendar", { url });
    const { data } = res;
    console.log(data);
    return data;
  }
  return "";
};
