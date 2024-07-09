import axios from "axios";

const instance = axios.create({
  baseURL: `https://mern-backend-tnmx.vercel.app`,
  });

  export default instance;
