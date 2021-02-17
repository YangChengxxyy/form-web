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

