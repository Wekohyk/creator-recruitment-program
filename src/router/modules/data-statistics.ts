export const data_statistics = [
  {
    path: '/data-statistics/login',
    component: () => import('@/views/data-statistics/login/index.vue'),
    meta: { title: '/data-statistics/login' },
  },
  {
    path: '/data-statistics/home',
    component: () => import('@/views/data-statistics/home/index.vue'),
    meta: { title: '/data-statistics/home' },
  },
];