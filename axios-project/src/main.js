import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes";
import axios from "axios";

/*::::::::::::::::| Axios configuration |::::::::::::::::*/
axios.defaults.baseURL = "https://axios-project-b132a.firebaseio.com";
axios.defaults.headers.common["Auhorization"] = "omer_auth_key";
axios.defaults.headers.get["Accepts"] = "aplication/json";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
