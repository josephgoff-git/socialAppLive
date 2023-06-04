import axios from "axios";

export const makeRequest = axios.create({
    baseURL:"https://opendreamdesigns.com/api/",
    withCredentials: true,
});