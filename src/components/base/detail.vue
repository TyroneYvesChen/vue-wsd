<template>
  <div class="detail clearfix">
    <div class="detail_name">{{ detailOptions.name }}</div>
    <!--<div class="detail_content">{{ detailOptions.content }}</div>-->
    <div>{{ detailOptions.content }}</div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props:{
    detailOptions:{
      type: Object,
      default (){
        return {
          name: "",
          content: ""
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
  .detail{
    width: 100%;
    //font-weight: $font-weight-default;
    font-size: $content-fontSize2;
    padding-bottom: 8px;
    text-align: left;
    @include ell();


    .detail_name{
      width: 45%;
      text-align: right;
      @include ell();
      float: left;
    }
    .detail_content{
      float: left;
      width: 55%;
      text-align: left;
    }
  }
</style>
