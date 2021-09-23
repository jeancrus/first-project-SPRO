import axios from "axios";

const api = axios.create({
  baseURL: "https://needs-api.azurewebsites.net",
});

export default api;
