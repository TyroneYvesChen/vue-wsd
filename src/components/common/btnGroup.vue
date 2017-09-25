<template>
  <div class="btnGroup">
    <div class="btn technologyStandard">工艺标准</div>
    <div class="btn workOrderEnd">工艺标准</div>
    <div class="btn errorEnd">工艺标准</div>
    <div class="btn outputEntering">工艺标准</div>
  </div>
</template>

<script>
export default {
  name: 'btnGroup',
  props:{
    detailOptions:{
      type: Object,
      default (){
        return {

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
  .btnGroup{
    display: inline-block;
    .btn{
      display: inline-block;
      border-radius: $border-radius-default * 2;
      padding: 15px 20px 15px 40px;
      color: $white-base;
      font-size: $content-fontSize;
      margin: $margin-btnGroup;
      &.technologyStandard{
        background: url("../../assets/img/workOrderManage/technologyStandard.png") no-repeat 10px center #3DBCFF;
        background-size: 18%;
      }
      &.workOrderEnd{
        background: url("../../assets/img/workOrderManage/workOrderEnd.png") no-repeat 10px center $font-color-item;
        background-size: 18%;
      }
      &.errorEnd{
        background: url("../../assets/img/workOrderManage/errorEnd.png") no-repeat 10px center $big-title;
        background-size: 18%;
      }
      &.outputEntering{
        background: url("../../assets/img/workOrderManage/outputEntering.png") no-repeat 10px center $left-nav-sign;
        background-size: 18%;
      }
    }
  }
</style>
