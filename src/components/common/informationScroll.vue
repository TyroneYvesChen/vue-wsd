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
        values: [23132132, 999999, 888888, "sdidjsdjasod", "跑啊跑", 5, 6],
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
      }, 1000);
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
