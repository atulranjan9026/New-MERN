import axios from "axios";

const instance = axios.create({
  baseURL: `https://mern-backend-tnmx.vercel.app`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`, // Example using local storage for token storage
  },
});

export default instance;
  