import axios from "axios";
import { token } from "./token";

const api = axios.create({
  baseURL: `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}&count=${10}`,
});

export default api;
