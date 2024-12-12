import { data_statistics } from './modules/data-statistics';

export const routes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    meta: { title: 'layout' },
    redirect: '/data-statistics/login',
    children: [
      {
        path: '/data-statistics',
        component: () => import('@/views/data-statistics/index.vue'),
        meta: { title: 'data-statistics' },
        children: data_statistics,
      },
    ],
  },
];
