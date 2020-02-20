import Vue from  'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    // 文本框内容
    inputVal: '',
    nextId: 5
  },
  mutations: {
    setList(state, data) {
      state.list = data
    },
    // 输入框变化
    changeIpt(state, val) {
      state.inputVal = val
    },
    // 添加
    addItem(state) {
      const obj = {
        id: state.nextId,
        info: state.inputVal,
        done: false
      }
      state.list.push(obj)
      state.nextId++
      state.inputVal = ''
    },
    // 删除
    delItem(state, id) {
      // 根据 id 查找索引
      const i = state.list.findIndex(x => x.id === id)
      // 删除
      i !== -1 ? state.list.splice(i, 1) : null
    },
    changeCkb(state, info) {
      const i = state.list.findIndex(x => x.id === info.id)
      i !== -1 ? state.list[i].done = info.checked : null
    }
  },
  actions: {
    async getList(context) {
      const {data} = await axios.get('/list.json')
      context.commit('setList', data)
    }
  }
})