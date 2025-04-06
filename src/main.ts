import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index.ts';
import './style.css';

const app = createApp(App);
app.use(router); //次回はApp.vueに処理の続きあり

app.mount('#app');
