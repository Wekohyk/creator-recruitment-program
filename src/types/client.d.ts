/*
  浏览器特性、请求平台特性
*/

export interface ClientInfo {
  // 系统
  os: string;
  // 是否在app内(top-widgets)
  isApp: boolean;
  // 是否是ios系统
  isIOS: boolean;
  // 是否是android系统
  isAndroid: boolean;
  // 是否在QQ内置浏览器打开
  isQQ: boolean;
  // 是否在微信内置浏览器打开
  isWX: boolean;
  // 机型是否是IPAD
  isIPAD: boolean;
  // 机型是否是HUAWEI
  isHUAWEI: boolean;
  // 是否在爱奇艺内置浏览器打开
  isAqiyi: boolean;
  // 是否英文环境
  isEn: boolean;
  // 是否在facebook内置浏览器打开
  isFaceBook: boolean;
  // 是否在twitter内置浏览器打开
  isTwitter: boolean;
  // 是否在微博内置浏览器打开
  isWeibo: boolean;
}
