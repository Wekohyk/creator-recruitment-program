import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/data-statistics/index.vue'),
      meta: { title: 'data-statistics' },
      children: [
        {
          path: '',
          component: () => import('@/views/data-statistics/login/index.vue'),
          meta: { title: 'login' },
        },
        {
          path: '',
          component: () => import('@/views/data-statistics/home/index.vue'),
          meta: { title: 'home' },
        },
      ],
    },
  ],
});

export default router;
