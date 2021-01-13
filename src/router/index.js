import { createRouter, createWebHistory } from 'vue-router'
const routes = [
   {
      path: '',
      name: 'list',
      component: () =>
         import(/* webpackChunkName: "list" */ '../views/List/ListView.vue')
   }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
})

export default router
