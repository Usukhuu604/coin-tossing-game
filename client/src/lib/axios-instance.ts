import axios from "axios";

export const instanceOfServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URI,
  headers: {
    "Content-Type": "application/json",
  },
});
