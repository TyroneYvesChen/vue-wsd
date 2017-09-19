<template>
  <div class="box">
    <div class="aaa" @click="getData">{{msg}}</div>
    <div class="bbb" @click="setD">{{aaa}}</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
export default {
  name: 'box',
  data () {
    return {
      msg: '测试测试测试',
      aaa: "hoo~"
    }
  },
  computed: {
    ...mapGetters(["wocao"]),
  },
  created (){
//    this.$store.dispatch('setWocao', "fuck")
  },
  methods: {
    getData (){
      console.log(this.wocao)
    },
    setD (){
      this.$store.dispatch('setWocao', "fuck")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
  $fontSize: 20px;
  .box{
    background-color: #ccc;
    .aaa{
      color: red;
    }
    .bbb{
      font-size: $fontSize;
      display: inline-block;
      padding: 15px;
      color: blue;
      background-color: aliceblue;
    }
  }
</style>
