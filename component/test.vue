<template>
  <div>
    <p @click="clickHander" id="button">点击测试</p>
    <span>{{count}}</span>
  </div>
</template>

<script>
import fn from '../src/fn/index.js';
export default {
  name: 'ParentComponent',
  components: { },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    onCustom () {
      this.emitted = true
    },
    clickHander() {
      let self = this;
      fn.debounce(function(){
        self.count ++;
      },1000)
    }

  },
  mounted () {
    
  }
}
</script>