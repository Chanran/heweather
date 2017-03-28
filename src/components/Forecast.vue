<template>
  <div>
    <div>{{suggestion}}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'forecast',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'forecast'
    ])
  },
  methods: {
    ...mapActions([
      'getForecast'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
