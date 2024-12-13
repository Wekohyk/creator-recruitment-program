import { createServer, Model } from 'miragejs';

const widgetList = [
  {
    name: '天气',
    type: ['medium', 'large'],
    img: '/widget/weather-medium.webp',
  },
  {
    name: '每日一言',
    type: ['large'],
    img: '/widget/everyday-large.webp',
  },
  {
    name: 'x-面板',
    type: ['small', 'medium', 'large'],
    img: '/widget/x-panel-small.webp',
  },
  {
    name: '风扇',
    type: ['small', 'medium', 'large'],
    img: '/widget/fan-small.webp',
  },
  {
    name: '下班倒计时',
    type: ['medium', 'large'],
    img: '/widget/workday-down-medium.webp',
  },
];
const MOCK_HEADER = 'mock';

// random data generation
const myWorksRandom = () => {
  const widget = widgetList[Math.floor(Math.random() * widgetList.length)];
  const { name: widgetName, type: widgetType, img: widgetImg } = widget;
  const useCount = String(Math.floor(Math.random() * 1000));
  const hotValue = String(Math.floor(Math.random() * 10000));
  const todayHotValue = String(
    Math.floor(Math.random() * (3333 - -3333 + 1)) + -3333,
  );

  return {
    widgetName,
    widgetType,
    widgetImg,
    useCount,
    hotValue,
    todayHotValue,
  };
};

createServer({
  models: {
    my_works: Model,
  },

  seeds(server) {
    // Create 10 records with individually generated random data
    for (let i = 0; i < 10; i++) {
      server.create('my_work', myWorksRandom() as any);
    }
  },

  routes() {
    this.namespace = MOCK_HEADER;

    this.get('/my-work', () => {
      const my_works = Array.from({ length: 10 }, () => myWorksRandom());
      return my_works;
    });
  },
});
