<template>
  <div class="leftNavSign clearfix">
    <div class="title">{{ leftNavSign.title }}</div>
    <div class="numberVal">{{ leftNavSign.numberVal }}</div>
    <div class="unit">{{ leftNavSign.unit }}</div>
  </div>
</template>

<script>
export default {
  name: 'leftNavSign',
  props:{
    leftNavSign:{
      type: Object,
      default (){
        return {
          title: "定额车速",
          numberVal: "111",
          unit: "公里"
        }
      }
    }
  },
  data () {
    return {

    }
  },
  created (){
//    this.$store.dispatch('setWocao', "fuck")
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
  .leftNavSign{
    display: inline-block;
    width: 50%;
    height: 100%;

    .title{
      font-size: $content-fontSize;
      color: $left-nav-item-title;
      font-weight: $font-weight-default;
    }
  }
</style>
