import axios from 'axios'

const API_URL = axios.create({
    // baseURL: `http://localhost:4000`
    baseURL: `https://evening-inlet-11817.herokuapp.com`
});

export default API_URL;