import axios from "axios";

const client = axios.create({
  baseURL: window.location.host + "/api"
});

export default client;