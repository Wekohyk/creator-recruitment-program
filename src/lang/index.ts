import zh from './zh.json';
import en from './en.json';
import jp from './ja.json';
import { createI18n } from 'vue-i18n';
import { getLocale } from './tool';
import { Locale } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';
import zhCN from 'vant/es/locale/lang/zh-CN';
import jaJP from 'vant/es/locale/lang/ja-JP';

const languages = {
  zh,
  en,
  jp,
};
const initLocale = getLocale();
const setVantLocale = {
  zh: () => {
    Locale.use('zh-CN', zhCN);
  },
  en: () => {
    Locale.use('en-US', enUS);
  },
  jp: () => {
    Locale.use('ja-JP', jaJP);
  },
};

export const i18n = createI18n({
  locale: initLocale,
  messages: languages,
  legacy: false,
  fallbackLocale: {
    zh: ['en', 'jp'],
    en: ['zh', 'jp'],
    jp: ['en', 'zh'],
  },
});

//设置vant语言
setVantLocale[initLocale]();

// 此处根据实际情况修改
// if (!tw.isPolyfill) {
//   tw.observeLanguageChanged(lang => {
//     /**
//      * 由于tw.language 更新不及时，所以必须传入给getLocale
//      */
//     const locale = getLocale(lang);
//     console.log('change', lang);
//     console.log('cur', locale);

//     setVantLocale[locale]();
//     i18n.global.locale.value = locale;
//   });
// }

export function getI18nGlobal() {
  return i18n.global;
}

export function getI18n() {
  return i18n;
}

export function getI18nLocale() {
  return i18n.global.locale;
}

// use vue-i18n in modules
export const $t = i18n.global.t.bind(i18n.global);
