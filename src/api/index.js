import axios from "axios";

const url = "https://api.opencovid.ca/";

export const fetchData = async () => {
  try {
    const response = await axios.get(url);

    return response.data.summary[0];
  } catch (error) {}
};
export default fetchData;
