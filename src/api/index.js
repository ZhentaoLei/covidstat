import axios from "axios";

const url = "https://api.opencovid.ca/";
export const fetchData = async () => {
  try {
    const response = await axios.get(url);
    return response.data.summary[0];
  } catch (error) {}
};
export default fetchData;

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/timeseries?loc=canada`);

    console.log(data);
    return data.active.map(({ active_cases, date_active }) => ({
      cases: active_cases,
      date: date_active,
    }));
  } catch (error) {
    return error;
  }
};
