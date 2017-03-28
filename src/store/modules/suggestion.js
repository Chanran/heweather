import heweather from '../../api/heweather'
import * as types from '../mutation_types'

// 初始state
const state = {
  suggestion: {}
}

// getters
const getters = {
  suggestion: state => state.suggestion
}

// actions
const actions = {
  getSuggestion ({ commit }, city) {
    heweather.getSuggestionData(
      (suggestion) => {
        commit(
          {
            type: types.RECEIVE_SUGGESTION_DATA,
            suggestion
          }
        )
      },
      city
    )
  }
}

// mutations
const mutations = {
  [types.RECEIVE_SUGGESTION_DATA] (state, action) {
    state.suggestion = action.suggestion
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
