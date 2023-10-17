import axios from "axios";

export default axios.create({
    baseURL:'https://resorse-hub-server.onrender.com',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});