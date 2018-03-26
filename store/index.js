import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      username: '',
      permission: '',
      errorMsg: ''
    },
    mutations: {
      login (state, account) {
        state.username = account.username
        state.permission = account.permission
      },
      logout (state) {
        state.username = ''
        state.permission = ''
      },
      newError (state, errorMsg) {
        state.errorMsg = errorMsg
      },
      noError (state) {
        state.errorMsg = ''
      }
    }
  })
}

export default createStore
