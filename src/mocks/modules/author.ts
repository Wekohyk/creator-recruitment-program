import { getMyWork } from '@/api/index';
import { ref } from 'vue';
import { $t } from '@/lang';
import { CardList } from '@/types/user';
import { getRandomNumber } from '@/hooks';
import { fakerZH_CN as faker } from '@faker-js/faker';

const totalWorksUsage = ref(0);
const totalHotValue = ref(0);
const everyTotalWorks = ref(0);
const everyHotValue = ref(0);

export const cardList: CardList[] = [
  {
    id: 0,
    icon: 'bi:sort-up-alt',
    iconColor: '#5856D6',
    title: $t('data_statistics.home.totalWorks'),
  },
  {
    id: 1,
    icon: 'tabler:flame-filled',
    iconColor: '#FF9500',
    title: $t('data_statistics.home.totalHot'),
  },
];

export const authorMirage = async () => {
  await getMyWork().then(res => {
    res.forEach(item => {
      totalWorksUsage.value += Number(item.useCount);
      totalHotValue.value += Number(item.hotValue);
      everyTotalWorks.value += Number(item.todayUseCount);
      everyHotValue.value += Number(item.todayHotValue);
    });
  });
  let creatorLeave = 1;
  let creatorLevelImg = '/mine/badge_1.webp';
  if (totalHotValue.value < 2000) {
    creatorLeave = 1;
    creatorLevelImg = '/mine/badge_1.webp';
  } else if (totalHotValue.value < 50000) {
    creatorLeave = 2;
    creatorLevelImg = '/mine/badge_2.webp';
  } else if (totalHotValue.value < 250000) {
    creatorLeave = 3;
    creatorLevelImg = '/mine/badge_3.webp';
  } else if (totalHotValue.value < 500000) {
    creatorLeave = 4;
    creatorLevelImg = '/mine/badge_4.webp';
  } else if (totalHotValue.value < 1500000) {
    creatorLeave = 5;
    creatorLevelImg = '/mine/badge_5.webp';
  } else {
    creatorLeave = 6;
    creatorLevelImg = '/mine/badge_6.webp';
  }
  const creatorName = faker.person.fullName();
  const creatorAvatar = `/data-statistics/avatar${getRandomNumber(0, 5)}.webp`;
  const isRealNameAuthentication = getRandomNumber(0, 1) <= 0.5 ? false : true;
  return {
    totalWorksUsage: totalWorksUsage.value,
    totalHotValue: totalHotValue.value,
    everyTotalWorks: everyTotalWorks.value,
    everyHotValue: everyHotValue.value,
    creatorName,
    creatorAvatar,
    isRealNameAuthentication,
    creatorLeave,
    creatorLevelImg,
  };
};
