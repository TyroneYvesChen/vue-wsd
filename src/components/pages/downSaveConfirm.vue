<template>
  <div class="downSaveConfirm" @click="closeModal($event)">

    <!--<my-modal :isShow="pickerShow">-->
      <!--<div>sdasd</div>-->
      <!--<date-picker></date-picker>-->
    <!--</my-modal>-->
    <right-content-tool-bar :toolBarObj="toolBarObj" @saveEvent="saveEvent"></right-content-tool-bar>

    <ul class="item-wrap" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20">

      <transition-group enter-active-class="animated fadeIn">
        <li v-for="(item, index) in list" class="item_li clearfix" :key="index">
          <div class="item-img col-2">
            <img src="../../assets/img/materialsManage/box_01.png"/>
          </div>
          <div class="col-2 item-ch2">
            <div class="bottom">
              <div class="title">拉带</div>
              <div class="small-content">单位：56只</div>
            </div>
          </div>
          <div class="col-2">
            <div class="bottom">
              <div class="small-content">结存最大值：10</div>
            </div>
          </div>
          <div class="col-3">
            <div class="bottom">
              <div class="title-s">结存数量</div>
              <div class="input">
                <input type="text" class="modalDom"
                       :class="{checked: !isCheckedObj[index]}"
                       @focus="isCheckedEvent($event, index)"
                       @blur="isCheckedEvent($event, index)"
                       ref="modalInput">
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="bottom">
              <div class="title-s">零头数</div>
              <div class="input">
                <input type="text" :class="{checked: !isCheckedObj2[index]}"
                       @focus="isCheckedEvent($event, index, 2)"
                       @blur="isCheckedEvent($event, index, 2)">
              </div>
            </div>
          </div>
        </li>
      </transition-group>
    </ul>

    <spinner></spinner>





    <my-modal :isShow="isShow" :dom="inputDom">
      <h1>popup {{index}}</h1>
      <p>/ ˈpɑpˌʌp /</p>
      <p>n. 弹出式; [棒]内野飞球; 自动起跳式装置</p>
      <p>adj. 弹起的; 有自动起跳装置的</p>
    </my-modal>




  </div>
</template>

<script>
  import rightContentToolBar from '../common/rightContentToolBar'
  import myModal from '../common/myModal'
  import datePicker from '../common/datePicker'
  import spinner from '../base/spinner'
export default {
  name: 'downSaveConfirm',
  components: {rightContentToolBar, spinner, myModal, datePicker},
  data () {
    return {
      isShow: false,
      list: [0,1,,,,,,],
      loading: true,      //设置成false使用
      checked: true,
      toolBarObj: {
        isSave: true,
        topTitle: "挡车工材料校验"
      },
      index: 0,
      inputDom: null,
      pickerShow: false,
      isCheckedObj: {},
      isCheckedObj2: {}
    }
  },
  created (){

  },
  methods: {
    isCheckedEvent (e, index, type){
      let objName = type ? `isCheckedObj${type}` : "isCheckedObj"
      console.log(objName)
      this.$set(this[objName],index,!this[objName][index])
      !type && this.showModal(index)
    },
    saveEvent (){
      this.pickerShow = true
    },
    handleChange(value) {
      Toast({
        message: '已选择 ' + value.toString(),
        position: 'bottom'
      });
    },
    showModal (index){
      this.isShow = true
//      this.inputPosition = this.$refs.modalInput[index].getBoundingClientRect()
      this.inputDom = this.$refs.modalInput[index]
      this.index = index
//      console.log(this.$refs.modalInput[index].getBoundingClientRect(), "getBoundingClientRect")
    },
    closeModal (e){
      if (e.target.classList.contains("modalDom")) return
      this.isShow = false
    },
    loadMore() {
      if (this.loading) {
        return false
      }
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 1000);
    }
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' rel="stylesheet/scss" type="text/css" scoped>
  .downSaveConfirm{
    padding-bottom: 20px;
    .item-wrap{
      padding: $padding-twoSize-default;
      .item_li{
        transition: all 0.5s;
        border-radius: $border-radius-default;
        margin: $margin;
        background-color: $item-bg;
        padding: $item-padding;
        text-align: left;
        >div{
          height: 100px;
          box-sizing: border-box;
        }
        .item-img{
          padding: $header-padding;
          img{
            height: $item-img;
            width: $item-img;
          }
        }
        .bottom{
          position: absolute;
          bottom: 0px;
          width: 100%;
        }
        .title{
          font-size: $title-fontSize;
          color: $font-color-default;
          padding: $padding;
        }
        .title-s{
          font-size: $content-fontSize;
          color: $font-color-default;
        }
        .small-content{
          color: $font-color-item;
          font-size: $content-fontSize;
          padding: $padding-small;
        }
        .input{
          padding: $padding-small;
          input{
            height: $input-default;
            border-radius: 5px;
            border: 1px solid #999;
            width: 75%;
            &.checked{
              background-color: $input-checked;
              border: none;
            }
          }
        }
      }
    }
  }


  //模态框
  .mint-popup-1 {
    width: 200px;
    border-radius: 8px;
    padding: 10px;
    transform: translate(-50%, 0);
    box-shadow: #ccc 1px 1px 25px 6px;
    h1 {
      font-size: 20px;
      color: #26a2ff;
    }

    p {
      margin-bottom: 10px;
    }
  }

  .mint-popup-1::before {
    display: inline-block;
    width: 0;
    height: 0;
    border: solid transparent;
    border-width: 10px;
    border-bottom-color: #fff;
    content: "";
    position: absolute;
    top: -20px;
    right: 50px;
  }
</style>
