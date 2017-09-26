<template>
  <div class="btnGroup">
    <div class="btn technologyStandard" @click.stop="tsBtnEvent">工艺标准</div>
    <div class="btn workOrderEnd" @click.stop="woeBtnEvent">工单结束</div>
    <div class="btn errorEnd" @click.stop="eeBtnEvent">异常终止</div>
    <div class="btn outputEntering" @click.stop="oeBtnEvent">产量录入</div>
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
    tsBtnEvent (){
      this.$emit('technologyStandard')
    },
    woeBtnEvent (){
      this.$emit('workOrderEnd')
    },
    eeBtnEvent (){
      this.$emit('errorEnd')
    },
    oeBtnEvent (){
      this.$emit('outputEntering')
    }
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
        background: url("../../assets/img/workOrderManage/technologyStandard.png") no-repeat 10px center $item-blue;
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
