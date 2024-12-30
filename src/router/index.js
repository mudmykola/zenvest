import { createRouter, createWebHistory } from 'vue-router';
const HomePage = () => import('@/views/home/HomePage.vue');
import AdminApp from '../admin/AdminApp.vue';
import NavigationEdit from '../admin/views/NavigationEdit.vue';
import Header from '@/admin/views/AdminHeader.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { title: 'Home' },
    },
    {
      path: '/admin',
      component: AdminApp,
      children: [
        {
          path: 'navigation',
          component: NavigationEdit,
        },
        {
          path: 'header',
          component: Header,
        },
      ],
    },
  ],
});

export default router;
