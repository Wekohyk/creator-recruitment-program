import { $t } from '@/lang';
import { fakerZH_CN as faker } from '@faker-js/faker';

export const widgetList = [
  {
    name: $t('widget.weather'),
    type: ['medium', 'large'],
    img: '/widget/weather-medium.webp',
  },
  {
    name: $t('widget.everyday'),
    type: ['large'],
    img: '/widget/everyday-large.webp',
  },
  {
    name: $t('widget.x_panel'),
    type: ['small', 'medium', 'large'],
    img: '/widget/x-panel-small.webp',
  },
  {
    name: $t('widget.fan'),
    type: ['small', 'medium', 'large'],
    img: '/widget/fan-small.webp',
  },
  {
    name: $t('widget.workday_down'),
    type: ['medium', 'large'],
    img: '/widget/workday-down-medium.webp',
  },
];

// random data generation
export const reviewRandom = () => {
  const widget = widgetList[Math.floor(Math.random() * widgetList.length)];
  const { name: widgetName, type: widgetType, img: widgetImg } = widget;

  const reviewStatus = faker.helpers.arrayElement([
    'publish',
    'join',
    'refuse',
  ]);
  // 作品审核状态
  const reviewContentMap = {
    publish: '作品已发布',
    join: '作品已进入审核中',
    refuse: '作品已被拒审',
  };
  const reviewContent = reviewContentMap[reviewStatus];
  // 作品审核符号
  const reviewSvgMap = {
    publish: 'ix:success-filled',
    join: 'ion:time',
    refuse: 'ix:error-filled',
  };
  const reviewSvg = reviewSvgMap[reviewStatus];
  // 作品审核颜色
  const reviewColorMap = {
    publish: '#34C759',
    join: '#FF9500',
    refuse: '#FF3B30',
  };
  const reviewColor = reviewColorMap[reviewStatus];

  const widgetId = 0;

  return {
    widgetName,
    widgetType,
    widgetImg,
    reviewStatus,
    reviewContent,
    reviewSvg,
    reviewColor,
    widgetId,
  };
};
