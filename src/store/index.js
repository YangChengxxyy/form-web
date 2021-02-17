import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import permission from '@/store/modules/permission'
import user from '@/store/modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    permission
  },
  getters
})

export default store
