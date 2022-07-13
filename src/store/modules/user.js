import { login } from '@/api/user'
const state = {
  token: null
}
const mutations = {
  setToken (state, payload) {
    state.token = payload
  }
}
const actions = {
  async login (context, payload) {
    try {
      const { data } = await login(payload)
      console.log(data)
      context.commit('setToken', data.data)
    } catch (err) {
      console.log(err)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

