import { $t } from '@/lang';

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
export const myWorksRandom = () => {
  const widget = widgetList[Math.floor(Math.random() * widgetList.length)];
  const { name: widgetName, type: widgetType, img: widgetImg } = widget;
  const useCount = String(Math.floor(Math.random() * 1000));
  const todayUseCount = String(Math.floor(Math.random() * 100));
  const hotValue = String(Math.floor(Math.random() * 10000));
  const todayHotValue = String(Math.floor(Math.random() * 3333));

  return {
    widgetName,
    widgetType,
    widgetImg,
    useCount,
    todayUseCount,
    hotValue,
    todayHotValue,
  };
};
