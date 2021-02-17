const getDefaultState = () => {
  return {
    router: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  ADD_ROUTER: (state, router) => {
    state.router.push(router)
  },
  REMOVE_ROUTER: (state, index) => {
    state.router.splice(index, 1)
  }
}

const actions = {
  addRouter({ commit }, router) {
    return new Promise((resolve, reject) => {
      commit('ADD_ROUTER', router)
    })
  },
  removeRouter({ commit }, index) {
    return new Promise((resolve, reject) => {
      commit('REMOVE_ROUTER', index)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

