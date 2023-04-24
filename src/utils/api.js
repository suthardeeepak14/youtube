import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "e4fb50724bmsh688ac8a932047dbp1bfe9ajsnc2dbda134316",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
