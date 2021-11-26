import axios from "axios";

export const request = axios.create({
    baseURL: "27.96.134.100:8080",
    timeout: 100000,
});