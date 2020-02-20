import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 需要全局共享的数据
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    }
  },
  actions: {
    addAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    }
  },
  getters: {
    showNum(state) {
      return `当前最新的数据是[${state.count}]`
    }
  },
  modules: {
  }
})
