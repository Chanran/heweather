<template>
  <div>
    <div>{{now}}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'now',
  data () {
    return {}
  },
  created () {
    this.getNow('广州')
  },
  computed: {
    ...mapGetters([
      'now'
    ])
  },
  methods: {
    ...mapActions([
      'getNow'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
