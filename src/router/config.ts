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
      {
        path: '/mine',
        component: () => import('@/views/mine/index.vue'),
        meta: { title: 'mine' },
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
  // 我的钱包
  {
    path: '/my-wallet',
    component: () => import('@/views/my-wallet/index.vue'),
    meta: { title: 'my-wallet' },
  },
  // 完税凭证
  {
    path: '/tax-payment',
    component: () => import('@/views/my-wallet/taxPayment.vue'),
    meta: { title: 'tax-payment' },
  },
];
