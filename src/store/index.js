import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from '../actions'
// import * as getters from '../getters'
import forcast from './modules/forecast'
import hourly from './modules/hourly'
import now from './modules/now'
import suggestion from './modules/suggestion'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    forcast,
    hourly,
    now,
    suggestion
  },
  strict: debug
})

