import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index'

Vue.use(Router)

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [

]
// 404 page must be placed at the end !!!
export const permissionRouter = [
  { path: '*', redirect: '/404', hidden: true }
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login'),
      hidden: true
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/Home'),
          meta: { title: '主页', icon: 'mdi-home' }
        },
        {
          path: 'collected',
          component: () => import('@/views/Collected'),
          meta: { title: '已收集表单', icon: 'mdi-form-dropdown' }
        }
      ]
    },
    {
      path: '/404',
      component: () => import('@/views/404'),
      hidden: true
    }
  ]
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
