import axios from "axios";

const baseURL = "http://api.sieumagiamgia.vn/api";

const api = axios.create({
    baseURL: baseURL
});

export default api;