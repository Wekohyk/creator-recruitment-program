import { $t } from '@/lang';
import { CardList } from '@/types/user';

export const cardList: CardList[] = [
  {
    id: 0,
    icon: 'bi:sort-up-alt',
    iconColor: '#5856D6',
    title: $t('data_statistics.home.totalWorks'),
    // 使用人数
    useCountPeople: 1333,
    count: 328,
  },
  {
    id: 1,
    icon: 'tabler:flame-filled',
    iconColor: '#FF9500',
    title: $t('data_statistics.home.totalHot'),
    // 热度值
    hotValue: 12989,
    hotCount: 4784,
  },
];
