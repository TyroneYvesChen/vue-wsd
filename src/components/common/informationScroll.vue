<template>
  <div class="informationScroll">
    <mt-picker
      :slots="numberSlot"
      @change="onNumberChange"
      :visible-item-count="1"
      :item-height="80"></mt-picker>
  </div>
</template>

<script>
export default {
  name: 'informationScroll',
  components: {},
  data () {
    return {
      numberSlot: [{
        flex: 1,
        defaultIndex: 0,
        values: ["Z版免税包装注意事项", "挡车工材料校验", "调牌任务更新", "辅料消耗情况", "一周设备作业"],
        className: 'slot1',
        textAlign: "left",
        className: "item"
      }]
    }
  },
  created (){

  },
  methods: {
    onNumberChange(picker, values) {

    }
  },
  mounted() {
    this.$nextTick(() => {
      let step = 0;
      setInterval(() => {
        this.numberSlot[0].defaultIndex = step++;
        if (step > this.numberSlot[0].values.length - 1) {
          step = 0;
        }
      }, 5000);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' rel="stylesheet/scss" type="text/css">
  .informationScroll{
    height: $header-height;
    .picker-item{
      height: 100%!important;
      color: $font-color-default;
    }
  }
</style>
