<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './utils/device'

export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

#app {
  height: 100%;
  width: 100%;
}

html,body {
  height: 100%;
}

body {
  background-color: #fbf9fe;
}
</style>
