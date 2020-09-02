import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basicInfo: {
      bannerUri: 'https://i0.hdslb.com/bfs/archive/b98c0f94b7aa520f64bb48f0b7c16dc21a179fcc.png'
    },
    loginStates: {
      login: 1,
      userHead: 'https://i1.hdslb.com/bfs/face/34f41775560d8ed1185f850b1a5c54b34001c532.jpg@70w_70h_1c_100q.webp',
      userName: 'zhengyi59'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
