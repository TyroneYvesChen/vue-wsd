<template>
  <div class="downSaveConfirm">

    <right-content-tool-bar :toolBarObj="toolBarObj"></right-content-tool-bar>

    <ul class="item-wrap" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20">

      <transition-group enter-active-class="animated fadeIn">
        <li v-for="item in list" class="item_li clearfix">
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
                <input type="text">
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="bottom">
              <div class="title-s">零头数</div>
              <div class="input">
                <input type="text" :class="{checked: checked}" @focus="checked = !checked" @blur="checked = !checked">
              </div>
            </div>
          </div>
        </li>
      </transition-group>
    </ul>

    <spinner></spinner>

  </div>
</template>

<script>
  import rightContentToolBar from '../common/rightContentToolBar'
  import spinner from '../base/spinner'
export default {
  name: 'downSaveConfirm',
  components: {rightContentToolBar, spinner},
  data () {
    return {
      list: [0,1,,,,,,],
      loading: true,      //设置成false使用
      checked: true,
      toolBarObj: {
        isSave: true,
        topTitle: "挡车工材料校验"
      }
    }
  },
  created (){

  },
  methods: {
    loadMore() {
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
        margin: $margin;
        background-color: $item-bg;
        padding: $item-padding;
        text-align: left;
        >div{
          height: 110px;
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
</style>
