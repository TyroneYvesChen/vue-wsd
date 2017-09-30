<template>
  <div class="page-picker-wrapper">
    <mt-picker :slots="dateSlots" @change="onDateChange" :visible-item-count="6" :item-height="50"></mt-picker>
  </div>
</template>

<script>
//  let  years = [],
//       months = [1,2,3,4,5,6,7,8,9,10,11,12],
//       days = [];

export default {
  name: 'myDatePicker',
  components: {},
  props: {

  },
  data () {
    return {
      dateSlots: [
        {
          flex: 1,
          values: [],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: [1,2,3,4,5,6,7,8,9,10,11,12],
          className: 'slot3',
          textAlign: 'center'
        },
        {
          divider: true,
          content: '-',
          className: 'slot4',
        },
        {
          flex: 1,
          values: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
          className: 'slot5',
          textAlign: 'left'
        }
      ],
      slotData:[],
      years: [],
      months: [1,2,3,4,5,6,7,8,9,10,11,12],
      days: []
    }
  },
  computed: {

  },
  created (){
    let date = new Date(),
      now_year = date.getFullYear(),
      now_month = date.getMonth() + 1,
      cond1 = now_year % 4 == 0,  //条件1：年份必须要能被4整除
      cond2 = now_year % 100 != 0,  //条件2：年份不能是整百数
      cond3 = now_year % 400 ==0;  //条件3：年份是400的倍数
    this.resetYearsArr(now_year)

  },
  mounted() {

  },
  watch: {
    years (data){
      this.dateSlots[0].values = this.years
    }
  },
  methods: {
    onDateChange(picker, values) {
      let month = values[1]
      console.log(month)
    },
    resetYearsArr (year){
      let interval = 10,
        arr = []
      for (let i = year - interval; i < year + interval; i++){
        arr.push(i)
      }
      this.years = arr
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
  .page-picker-wrapper{
    width: 300px;
    background-color: #3DBCFF;
  }

</style>
