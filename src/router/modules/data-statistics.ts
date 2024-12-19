export const data_statistics = [
  // 登陆页面
  {
    path: '/data-statistics/login',
    component: () => import('@/views/data-statistics/login/index.vue'),
    meta: { title: '/data-statistics/login' },
  },
  // 首页
  {
    path: '/data-statistics/home',
    component: () => import('@/views/data-statistics/home/index.vue'),
    meta: { title: '/data-statistics/home' },
  },
];
