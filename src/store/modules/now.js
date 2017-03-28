import heweather from '../../api/heweather'
import * as types from '../mutation_types'

// 初始state
const state = {
  now: {}
}

// getters
const getters = {
  now: state => state.now
}

// actions
const actions = {
  getNow ({commit, city}) {
    heweather.getNowData(
      (now) => {
        commit(
          {
            type: types.RECEIVE_NOW_DATA,
            now
          }
        )
      },
      city
    )
  }
}

// mutations
const mutations = {
  [types.RECEIVE_NOW_DATA] (state, action) {
    state.now = action.now
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
