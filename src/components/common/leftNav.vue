<template>
  <div class="left_nav_wrap">
    <div class="left_nav_item">
      <div class="img_wrap">
        <img src="../../assets/img/leftNav/producting.png"/>
      </div>
    </div>
    <div class="left_nav_item">
      <div class="item_title">卷烟机QWER</div>
      <detail :detailOptions="{name:'编号：', content:88888888}"></detail>
      <detail :detailOptions="{name:'班次：', content:'A'}"></detail>
      <detail :detailOptions="{name:'班别：', content:'甲'}"></detail>
      <detail :detailOptions="{name:'生产日期：', content: '2016-01-01'}"></detail>
    </div>
    <div class="left_nav_item">
      <div class="item_title color-orange">中华条烟中华条烟中华条烟十五字</div>
      <div class="item_content">234567_dfghjnmk_34567</div>
      <detail :detailOptions="{name:'工作状态：', content:'运行'}"></detail>
      <detail :detailOptions="{name:'生产标识：', content:'正常'}"></detail>
    </div>
    <div class="left_nav_item">
      <div class="circle_percent"></div>
      <div class="item_content clearfix">
        <div class="detail_name">计划产量：</div>
        <div class="detail_content_large">999</div>
        <div class="detail_content">万支</div>
      </div>
      <div class="leftNavSignWrap">
        <left-nav-sign></left-nav-sign>
        <left-nav-sign></left-nav-sign>
        <left-nav-sign></left-nav-sign>
        <left-nav-sign></left-nav-sign>
      </div>
    </div>

    <!--<van-popup v-model="popupVisible" position="bottom">-->
      <!--<div class="vanSlider">-->
        <!--<van-swipe>-->
          <!--<van-swipe-item v-for="(img, index) in images" :key="index">-->
            <!--{{index}}-->
          <!--</van-swipe-item>-->
        <!--</van-swipe>-->
      <!--</div>-->
    <!--</van-popup>-->
    <mt-popup
      v-model="popupVisible"
      position="bottom">
      <div class="vanSlider">sdsadsadasd</div>
    </mt-popup>
  </div>
</template>

<script>
  import Vue from 'vue'
  import detail from '../base/detail'
  import leftNavSign from '../base/leftNavSign'
  import Hammer from '../../vendor/hammer'

  import { Popup, Swipe, SwipeItem} from 'vant';

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  Vue.component(Popup.name, Popup);
  export default {
  name: 'left_nav_wrap',
  components: {detail, leftNavSign},
  data () {
    return {
      popupVisible: false,
      arr:[,,,],
      images: [
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
      ]
    }
  },
  computed: {

  },
  created (){
//    this.$store.dispatch('setWocao', "fuck")
  },
  methods: {

  },
  mounted() {
    console.log(Hammer)
    let _this = this
    let dom = document.querySelector("#left_nav")
    let h = new Hammer(dom)
    h.on('panup', function(ev) {
      _this.popupVisible = true
      console.log(ev);
    });
    h.on('pandown', function(ev) {
      console.log(ev);
      _this.popupVisible = false
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
  .left_nav_wrap{
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: $left-nav-width;
    background-color: $left-nav-bg;
    text-align: center;
    padding: 15px 25px;
    overflow: hidden;
    .left_nav_item{
      display: block;
      padding: 5px 2px 0px;
      text-decoration: none;
      color: $left-nav-item-title;
      .img_wrap{
        display: inline-block;
        img{
          margin: 0 auto;
          width: 60%;
        }
      }


      .item_title{
//        @include ell();
        //font-weight: $font-weight-default;
        font-size: $title-fontSize;
        padding: 10px;
        &.color-orange{
          color: $big-title;
        }
      }
      .item_content{
        //font-weight: $font-weight-default;
        font-size: $content-fontSize;
        padding-bottom: 8px;
        @include ell();
        .detail_name{
          width: 45%;
          text-align: right;
          float: left;
        }
        .detail_content, .detail_content_large{
          float: left;
          text-align: left;
        }
        .detail_content, .detail_name{
          line-height: 28px;
        }
        .detail_content_large{
          font-size: $title-fontSize;
          padding: 0 8px;
          color: $white-base;
        }
      }

      .circle_percent{
        background-color: $big-title;
        height: 75px;
        width: 75px;
        display: inline-block;
        border-radius: 100%;
      }
    }
    .vanSlider{
      background-color: #31c27c;
      font-size: 35px;
      height: 300px;
      width: 100%;
    }
  }
</style>
