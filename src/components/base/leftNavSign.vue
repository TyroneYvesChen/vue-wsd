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
    float: left;
    width: 50%;
    height: 100%;
    font-size: $content-fontSize;
    background-color: $left-nav-sign;
    border: 2px solid $left-nav-bg;
    padding: 10px 0px;
    .title{
      color: $left-nav-item-title;
      //font-weight: $font-weight-default;
      @include ell();
    }
    .numberVal{
      font-size: $title-fontSize;
      font-weight: $font-weight-default;
      color: $white-base;
      padding: 15px 0 10px 0;
      @include ell();
    }
    .unit{
      color: $gray-minor;
      @include ell();
    }
  }
</style>
