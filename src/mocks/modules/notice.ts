import { getRandomNumber } from '@/hooks';
import { fakerZH_CN as faker } from '@faker-js/faker';

export const noticeRandom = () => {
  const avatarImgRandom = `/data-statistics/avatar${getRandomNumber(0, 5)}.webp`;
  const widgetNotice = getRandomNumber(0, 20);
  const avatarNameEn = faker.person.fullName();
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
  const svgColorMap = {
    share: '#FF8A001A',
    add: '#975DFF1A',
    like: '#FF3CBD1A',
    use: '#FF57571A',
    browse: '#6D6AFF1A',
    passShare: '#2CCF321A',
    passLook: '#2CCF321A',
    passFlame: '#FF8A001A',
    passRecharge: '#FF57571A',
    refundFlame: '#975DFF1A',
  };
  const svgColor = svgColorMap[widgetStatus];
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
    refundFlame: '0',
  };
  const hotValue = hotValueMap[widgetStatus];

  return {
    avatarImgRandom,
    widgetNotice,
    avatarNameEn,
    widgetStatus,
    svgColor,
    hotValue,
  };
};
