import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Forecast from '@/components/Forecast' // 天气预报组件
import Hourly from '@/components/Hourly' // 每小时天气预报组件
import Now from '@/components/Now' // 实时天气组件
import Suggestion from '@/components/Suggestion' // 生活指数组件

// 使用router
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'now',
          name: 'now',
          component: Now
        },
        {
          path: 'forecast',
          name: 'Forecast',
          component: Forecast
        },
        {
          path: 'hourly',
          name: 'Hourly',
          component: Hourly
        },
        {
          path: 'suggestion',
          name: 'Suggestion',
          component: Suggestion
        }
      ]
    }
  ]
})
