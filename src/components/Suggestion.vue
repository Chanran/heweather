<template>
  <div>
    <button type="button" @click="getSuggestionData">获取数据</button>
    <div>{{data}}</div>
  </div>
</template>

<script>

import heweather from '../api/heweather'

export default {
  name: 'test',
  data () {
    return {
      data: ''
    }
  },
  methods: {
    getSuggestionData: function () {
      heweather.getSuggestionData(suggestionData => {
        console.log(suggestionData)
        this.data = suggestionData
      }, '广州')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
