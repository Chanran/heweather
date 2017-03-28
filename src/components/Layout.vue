<template>
  <div>
    <x-header>当前天气</x-header>
    <router-view></router-view>
    <tabbar>
      <tabbar-item link="/weather/now">
        <span slot="label">当前</span>
      </tabbar-item>
      <tabbar-item link="/weather/hourly">
        <span slot="label">小时</span>
      </tabbar-item>
      <tabbar-item link="/weather/forecast">
        <span slot="label">预报</span>
      </tabbar-item>
      <tabbar-item link="/weather/suggestion">
        <span slot="label">指数</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem } from 'vux'

export default {
  name: 'layout',
  components: {
    XHeader,
    Tabbar,
    TabbarItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
