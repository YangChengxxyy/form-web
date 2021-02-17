import router from './router'
import store from './store'
import { getToken } from '@/utils/auth' // get token from cookie

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar

  // determine whether the user has logged in
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login' || to.path === '/') {
      // if is logged in, redirect to the home page
      if (store.getters.token.role === undefined && to.path === '/') {
        next(`/login?redirect=${to.path}`)
      } else {
        next({ path: '/home' })
      }
    } else {
      const hasGetUserInfo = store.getters.token != null
      if (hasGetUserInfo) {
        store.dispatch('user/getInfo').then(res => { // 拉取info
          const roles = res.user.type
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next() // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }).catch(err => {
          console.log(err)
        })
        next()
      } else {
        try {
          // get user info
          await store.dispatch('user/getInfo')
          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})
