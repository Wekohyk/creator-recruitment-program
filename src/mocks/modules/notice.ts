import { getRandomNumber } from '@/hooks';
import { $t } from '@/lang';
import { fakerZH_CN as faker } from '@faker-js/faker';

export const noticeRandom = () => {
  const avatarImgRandom = `/data-statistics/avatar${getRandomNumber(0, 5)}.webp`;
  const widgetNotice = getRandomNumber(0, 20);
  const avatarName = faker.person.fullName();
  const widgetStatus = faker.helpers.arrayElement([
    'share',
    'add',
    'like',
    'use',
    'browse',
    'passShare',
    'passLook',
    'passFlame',
    'passRecharge',
    'refundFlame',
  ]);
  // svg背景颜色
  const svgColorMap = {
    share: '#FF8A00',
    add: '#975DFF',
    like: '#FF3CBD',
    use: '#FF5757',
    browse: '#6D6AFF',
    passShare: '#2CCF32',
    passLook: '#2CCF32',
    passFlame: '#FF8A00',
    passRecharge: '#FF5757',
    refundFlame: '#975DFF',
  };
  const svgColor = svgColorMap[widgetStatus];
  // svg操作
  const contentMap = {
    share: $t('popup.dynamic_display.share'),
    add: $t('popup.dynamic_display.add'),
    like: $t('popup.dynamic_display.like'),
    use: $t('popup.dynamic_display.use'),
    browse: $t('popup.dynamic_display.browse'),
    passShare: $t('popup.dynamic_display.passShare'),
    passLook: $t('popup.dynamic_display.passLook'),
    passFlame: $t('popup.dynamic_display.passFlame'),
    passRecharge: $t('popup.dynamic_display.passRecharge'),
    refundFlame: $t('popup.dynamic_display.refundFlame'),
  };
  const hotContent = contentMap[widgetStatus];
  // svg热度变化
  const hotValueMap = {
    share: '+5',
    add: '+1',
    like: '+3',
    use: '+5',
    browse: '0',
    passShare: '+8',
    passLook: `+${getRandomNumber(1, 20)}`,
    passFlame: '+8',
    passRecharge: '+10',
    refundFlame: '-5',
  };
  const hotValue = hotValueMap[widgetStatus];
  // svg图片
  const svgImgMap = {
    share: 'icon-park-solid:share-two',
    add: 'basil:add-solid',
    like: 'wpf:like',
    use: 'tdesign:user-arrow-down',
    browse: 'tdesign:browse',
    passShare: 'mdi:user-add',
    passLook: 'mdi:user-add',
    passFlame: 'uil:unlock',
    passRecharge: 'healthicons:money-bag',
    refundFlame: 'mingcute:card-refund-fill',
  };
  const svgImg = svgImgMap[widgetStatus];

  return {
    avatarImgRandom,
    widgetNotice,
    avatarName,
    widgetStatus,
    svgColor,
    hotValue,
    hotContent,
    svgImg,
  };
};
