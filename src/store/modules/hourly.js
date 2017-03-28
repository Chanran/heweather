import heweather from '../../api/heweather'
import * as types from '../mutation_types'

// 初始state
const state = {
  hourly: {}
}

// getters
const getters = {
  hourly: state => state.hourly
}

// actions
const actions = {
  getHourly (commit, city) {
    heweather.getHourlyData(
      (hourly) => {
        commit(
          {
            type: types.RECEIVE_HOURLY_DATA,
            hourly
          }
        )
      },
      city
    )
  }
}

// mutations
const mutations = {
  [types.RECEIVE_HOURLY_DATA] (state, action) {
    state.hourly = action.hourly
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
