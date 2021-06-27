import { createApp } from 'vue'
import './assets/global.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$baseUrl = "http://127.0.0.1:8000/api/";
app.use(router);
app.mount('#app');
//createApp(App).use(router).mount('#app')
