import { login } from '@/api/user'
import { getToken, setToken} from '@/utils/auth'

const getDefaultState = () => {
  return {
    user: getToken()
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, user) => {
    state.user = user
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        const { data } = response
        console.log(data)
        if (data) {
          commit('SET_TOKEN', data)
          setToken(data)
          resolve()
        } else {
          reject()
        }
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

