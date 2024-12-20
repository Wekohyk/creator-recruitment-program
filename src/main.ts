// 自定义指令
import backToTop from './directive/back-to-top';
import { createApp } from 'vue';
// pinia
import { createPinia } from 'pinia';
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
import '@/mocks';
import vClickOutside from 'v-click-outside';

const app = createApp(App);

app
  .use(createPinia())
  .use(router)
  .directive('back-to-top', backToTop)
  .use(getI18n())
  .use(vClickOutside);
app.mount('#app');
