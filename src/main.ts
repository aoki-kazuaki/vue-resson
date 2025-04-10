import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index.ts';
import './style.css';

const app = createApp(App);
const pinia = createPinia();

app.use(router); //次回はApp.vueに処理の続きあり
app.use(pinia);

app.mount('#app');
