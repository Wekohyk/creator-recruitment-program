import { $t } from '@/lang';

export const tabList = [
  {
    name: $t('tabList.text_one'),
    icon: 'fluent:data-histogram-20-filled',
    id: 1,
    meta: 'data-statistics',
    url: '/data-statistics/login',
  },
  {
    name: $t('tabList.text_two'),
    icon: 'solar:lightbulb-bold',
    id: 1,
    meta: 'creator',
    url: '/creator',
  },
  {
    name: $t('tabList.text_three'),
    icon: 'mynaui:user-solid',
    id: 1,
    meta: 'mine',
    url: '/mine',
  },
];
