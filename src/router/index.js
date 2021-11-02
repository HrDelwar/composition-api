import AllTodo from '@/components/AllTodo'
import NotFound from '@/components/NotFound'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', name: 'Root', component: AllTodo },
  { path: '/home', name: 'Home', component: AllTodo },

  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
