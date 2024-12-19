import { getMyWork } from '@/api/index';
import { ref } from 'vue';
import { $t } from '@/lang';
import { CardList } from '@/types/user';

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
  return {
    totalWorksUsage: totalWorksUsage.value,
    totalHotValue: totalHotValue.value,
    everyTotalWorks: everyTotalWorks.value,
    everyHotValue: everyHotValue.value,
  };
};
