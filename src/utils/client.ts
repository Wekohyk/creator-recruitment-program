import { ClientInfo } from '@/types/client';

class ClientUtil {
  rules = {
    ANDROID: /Android/i,
    IOS: /iPhone|iPad|iPod/i,
    WEIXIN: /MicroMessenger/i,
    QQ: /(^| )(QQ)( |\/|$)/i,
    QQBROWSER_HD: /iPad.*?(^| )(MQQBrowser)( |\/|$)/i,
    QQBROWSER: /(^| )(MQQBrowser)( |\/|$)/i,
    IPAD: /iPad/,
    VERSION: /[a-zA-Z]{3,4}(_android|_iphone|_ipad),(\d.\d{1,2}.\d{1,2})/i,
    HUAWEI: /HUAWEI/i,
    AQIYI: /IqiyiApp/i,
    CLIENT_CHANNEL:
      /[a-zA-Z]{3,4}(_android|_iphone|_ipad),(\d.\d{1,2}.\d{1,2}),(\w+)/i,
    // ipad的ua会被设置为pc相同的ua来让ipad的体验更接近pc，h5没有pc端页面需求，如果有识别pc端需求，需要更改
    MAC: /Mac OS/i,
    FaceBook: /(FBAN|Facebot|facebookexternalhit)/i,
    Twitter: /Twitter/i,
    Weibo: /Weibo/i,
  };
  info: ClientInfo | undefined;

  initInfo(): ClientInfo {
    const UA = window.navigator.userAgent;
    const language = navigator.language.toLowerCase();
    const isMac = this.rules.MAC.test(UA);
    const isIOS = this.rules.IOS.test(UA) || isMac;
    const isAndroid = this.rules.ANDROID.test(UA);
    const isQQ = this.rules.QQ.test(UA);
    const isWX = this.rules.WEIXIN.test(UA);
    const isIPAD = this.rules.IPAD.test(UA);
    const isHUAWEI = this.rules.HUAWEI.test(UA);
    const isAqiyi = this.rules.AQIYI.test(UA);
    const isFaceBook = this.rules.FaceBook.test(UA);
    const os = isAndroid
      ? (UA.match(this.rules.ANDROID) as string[])[0].toLowerCase()
      : !isIOS
        ? 'android'
        : isMac
          ? 'InterMac'
          : (UA.match(this.rules.IOS) as string[])[0].toLowerCase();
    // todo 换成对应产品
    // const isApp = UA.match(/gly/i);
    const windowRef = window as any;
    const isApp = isIOS
      ? !!windowRef?.webkit?.messageHandlers
      : !!windowRef?.tw_android;
    const _language = new URLSearchParams(location.search).get('_language');
    const isEn =
      (_language && 'en'.includes(_language)) ||
      (!_language &&
        !['zh-cn', 'zh-tw', 'zh-hk', 'zh-sg', 'zh-mo'].includes(language));
    return {
      os,
      isApp,
      isIOS,
      isAndroid,
      isQQ,
      isWX,
      isIPAD,
      isHUAWEI,
      isAqiyi,
      isFaceBook,
      isEn,
      isWeibo: this.rules.Weibo.test(UA),
      isTwitter: this.rules.Twitter.test(UA),
    };
  }

  getInfo() {
    if (this.info) {
      return this.info;
    }
    this.info = this.initInfo();
    return this.info;
  }
  needToShow() {
    const { isQQ, isWeibo, isFaceBook, isTwitter } = this.getInfo();
    return isQQ || isWeibo || isFaceBook || isTwitter;
  }
}

export default new ClientUtil();
