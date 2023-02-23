import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api-nlw-setup.onrender.com/summary'
})
