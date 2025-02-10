import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from "@/Layout/Main.vue";
import ProjectLayout from "@/Layout/ProjectLayout.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'home',
      component: () => import('../views/LoginPage.vue'),
    },

    {
      path: '/project',
      component: ProjectLayout,
      children: [
        {
          path: '/project-content/:id',
          name: 'project-content',
          component: () => import('../views/ProjectContent/Index.vue'),
        },
      ]
    },


   {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: '/',
        name: 'admin',
        component: () => import("@/views/Dashboard/IndexContent.vue"),
      },
    ]
   }
  ],
})

export default router
