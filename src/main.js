import { createApp } from "vue";
import { createPinia } from "pinia";
import './main.css';
import "./styles.css";
import App from "./App.vue";  
import LoginApp from "./LoginApp.vue";
import loginRouter from "./router/loginRouter";
import axios from 'axios'
import VueAxios from 'vue-axios'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const pinia = createPinia()


let app = createApp(LoginApp)

app.use(loginRouter)
app.use(VueAxios, axios)
app.use(pinia)
app.use(ToastPlugin,{
    position: "top-right",
  });
//app.use(BootstrapVue3)
app.config.globalProperties.$api_url = 'http://localhost:3000/'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
app.mount("#app");
//console.log(localStorage.getItem('user'))
// import { useAuthStore } from "./store/authStore";
// console.log("test" + useAuthStore().isLoggedIn())
