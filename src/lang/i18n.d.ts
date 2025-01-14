export type Languages = 'zh' | 'en' | 'jp';
export interface Glyi18n<T = string> {
  en: T;
  zh: T;
  jp: T;
}
