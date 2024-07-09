import axios from "axios";

const instance = axios.create({
    baseURL: `https://e-commerce-mern54.vercel.app`,
  });

  export default instance;