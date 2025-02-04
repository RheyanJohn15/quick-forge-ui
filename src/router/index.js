import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from "@/Layout/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Login.vue'),
    },

   {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: '/admin',
        name: 'admin',
        component: () => import("@/views/Dashboard/Index.vue"),
      },
    ]
   }
  ],
})

export default router
