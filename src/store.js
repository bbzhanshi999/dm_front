import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: '',
      id: '',
      name:'',
      phone:'',
      department:{
        id:'',
        departCode:'',
        departName:''
      }
    }
  },
  getters:{
    principal: state => {
      return state.user
    }
  },
  mutations: {
    updatePrincipal (state, loginInfo) {
      state.user = loginInfo
    }
  },
  actions: {
  }
})
