import axios from "axios";

const instance = axios.create({
  baseURL: "https://axios-project-b132a.firebaseio.com"
})

//axios.defaults.headers.common["Auhorization"] = "omer_auth_key";
//axios.defaults.headers.get["Accepts"] = "aplication/json";

export default instance;
