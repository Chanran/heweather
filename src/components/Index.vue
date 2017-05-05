<template>
  <div class="root">
    <div class="container">
      <flexbox>
        <flexbox-item>
          <search
            @result-click="setCity"
            @on-change="getResult"
            @on-focus="onFocus"
            @on-cancel="onCancel"
            @on-submit="onSubmit"
            :results="results"
            v-model="value"
            ref="search"
            position="absolute"
            auto-scroll-to-top top="0"
          >
          </search>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import * as storage from '@/utils/storage'
import getResult from '@/utils/city'

import { Search, Flexbox, FlexboxItem } from 'vux'

export default {
  name: 'index',
  components: {
    Search,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      results: [],
      value: 'test'
    }
  },
  methods: {
    setCity (city) {
      storage.setStorage('city', city)
      alert('test')
    },
    getResult (val) {
      console.log(val)
      // this.results = val ? getResult(this.value) : []
      console.log(getResult(this.value))
    },
    setFocus () {
      this.$refs.search.setFocus()
    },
    onSubmit () {
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.root {
  width: 100%;
  height: 100%;
  background: url('../assets/bg.jpg') no-repeat;
  background-size: 100% 100%;
}

.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
