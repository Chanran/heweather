<template>
  <div>
    <div>{{suggestion}}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'suggetion',
  data () {
    return {}
  },
  created () {
    this.getSuggestion('广州')
  },
  computed: {
    ...mapGetters([
      'suggestion'
    ])
  },
  methods: {
    ...mapActions([
      'getSuggestion'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
