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
  // 成长中心
  {
    path: '/growth-center',
    component: () => import('@/views/growth-center/index.vue'),
    meta: { title: 'growth-center' },
  },
  // 系统通知
  {
    path: '/system-notification',
    component: () => import('@/views/system-notification/index.vue'),
    meta: { title: 'system-notification' },
  },
  // 审核反馈
  {
    path: '/review-feedback',
    component: () => import('@/views/review-feedback/index.vue'),
    meta: { title: 'review-feedback' },
  },
];
