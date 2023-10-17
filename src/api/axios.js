import axios from "axios";

export default axios.create({
    baseURL:'https://resouse-hub-server.onrender.com',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

//https://resouse-hub-server.onrender.com
// https://resorse-hub-server.onrender.com