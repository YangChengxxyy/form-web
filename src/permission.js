import router from './router'
import store from './store'

router.beforeEach(async(to, from, next) => {
  // start progress bar
  if (to.path === '/login') {
    next()
  } else if (!store.getters.user) {
    next({ path: '/login' })
  } else {
    next()
  }
})

router.afterEach(async(to, from, next) => {
  if (store.getters.router.length === 0) {
    store.dispatch('router/addRouter', to)
    return
  }
  let needAdd = true
  store.getters.router.map(
    (value, index) => {
      if (to.fullPath === value.fullPath) {
        needAdd = false
      }
    }
  )
  if (needAdd) {
    store.dispatch('router/addRouter', to)
  }
})

