<template>
  <div class="rightContentToolBar clearfix">
    <div class="col-2 returnBack" @click="returnBack">< 返回</div>
    <div class="col-8">{{ toolBarObj.topTitle }}</div>
    <div class="col-2 save" v-if="toolBarObj.isSave" @click="save">保存</div>
  </div>
</template>

<script>
export default {
  name: 'rightContentToolBar',
  components: {},
  props:{
    toolBarObj:{
      type: Object,
      default (){
        return {
          isSave: true,
          topTitle: "",
        }
      }
    }
  },
  data () {
    return {

    }
  },
  created (){

  },
  methods: {
    returnBack (){
      this.$router.go(-1)
    },
    save (){
      this.$emit('saveEvent')
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' rel="stylesheet/scss" type="text/css" scoped>
  .rightContentToolBar{
    font-size: $title-fontSize;
    color: $font-color-default;
    padding: 20px 10px;
    .returnBack{
      text-align: left;
    }
    .save{
      text-align: right;
    }
  }
</style>
