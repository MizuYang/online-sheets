import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'univer',
    meta: {
      title: 'univer'
    },
    component: () => import('@/views/Univer.vue')
  },
  {
    path: '/ejsSpreadsheet',
    name: 'ejsSpreadsheet',
    meta: {
      title: 'EjsSpreadsheet'
    },
    component: () => import('@/views/EjsSpreadsheet.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.fullPath.match('/')) {
      return {
        top: 0 //* 切換頁面時會切換到最上面的位置
      }
    }
    return {}
  }
})
// 頁面跳轉時 更改網頁title
router.beforeEach((to, from, next) => {
  const { title } = to.meta
  document.title = title

  next()
})

export default router
