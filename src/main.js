import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import store from "./store/store";

const toastOptions = {
    position: "top-right",
    timeout: 3000,
};
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

// Import Quasar css
import 'quasar/src/css/index.sass'


const app = createApp(App)
app.use(Toast)
app.use(store);
app.use(router)
app.use(Quasar, { plugins: {}}).use(router)

store.dispatch('checkAuth')

app.mount('#app')