<template>
  <van-datetime-picker class="wrap"
    v-model="currentDate"
    type="date"
    @change="handlePickerChange"
    @confirm="confirm">
  </van-datetime-picker>
</template>

<script>
  import Vue from 'vue'
  import { DatetimePicker } from 'vant';
//  import 'vant/lib/vant-css/picker.css';
  Vue.component(DatetimePicker.name, DatetimePicker);
export default {
  name: 'datePicker',
  components: {},
  props: {

  },
  data () {
    return {
      currentDate: new Date(2018, 0, 1)
    }
  },
  computed: {

  },
  created (){

  },
  mounted() {

  },
  watch: {

  },
  methods: {
    handlePickerChange(picker) {
      console.log(picker.setColumnValues(1, ["2016", "01", "08"]));
    },
    confirm (data){
      console.log(data.getFullYear())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'  rel="stylesheet/scss" type="text/css">
  .wrap{
    width: 500px;
  }
</style>
