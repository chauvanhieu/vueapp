import axios from "axios";

const baseURL = "https://api.sieumagiamgia.vn/api";

const api = axios.create({
    baseURL: baseURL
});

export default api;