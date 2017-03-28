import heweather from '../../api/heweather'
import * as types from '../mutation_types'

// 初始state
const state = {
  forecast: {}
}

// getters
const getters = {
  forecast: state => state.forecast
}

// actions
const actions = {
  getForecast ({ commit }, city) {
    heweather.getForecastData(
      (forecast) => {
        commit(
          {
            type: types.RECEIVE_FORECAST_DATA,
            forecast
          }
        )
      },
      city
    )
  }
}

// mutations
const mutations = {
  [types.RECEIVE_FORECAST_DATA] (state, action) {
    state.forecast = action.forecast
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
