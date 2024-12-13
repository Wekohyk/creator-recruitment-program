// 自定义指令
import backToTop from './directive/back-to-top';
import { createApp } from 'vue';
// pinia and pinia-plugin-persistedstate
import pinia from './store';
// vue-router
import router from './router';
/**
 * Import the Unocss core styles
 * Best placed after reset style, before uno.css
 */
import './assets/styles/index.scss';
// Import the Unocss utilities styles
import 'uno.css';
// i18n
import { getI18n } from './lang';
// App
import App from './App.vue';
// import miragejs server
import '@/mocks/index';

const app = createApp(App);

app.use(pinia).use(router).directive('back-to-top', backToTop).use(getI18n());
app.mount('#app');
