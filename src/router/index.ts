import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import GeneticsView from '@/views/GeneticsView.vue'
import BlankView from '@/views/BlankView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Genetics',
    component: GeneticsView
  },
  {
    path: '/blank',
    name: 'Blank',
    component: BlankView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => window.scrollTo(0, 0)
})

export default router
