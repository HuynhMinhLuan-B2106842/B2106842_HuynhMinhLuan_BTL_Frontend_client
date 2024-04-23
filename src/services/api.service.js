import axios from "axios";
const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    ...commonConfig,
  });
  
  export default api;