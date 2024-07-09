import axios from "axios";

const instance = axios.create({
  baseURL: `https://new-mern-six.vercel.app`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`, // Example using local storage for token storage
  },
});

export default instance;
  