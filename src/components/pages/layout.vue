<template>
  <div class="wrap clearfix">
    <!--左侧导航栏start-->
    <div class="left_nav_wrap">
      <div class="left_nav_item">
          <img src="../../assets/logo.png"/>
      </div>
      <div class="left_nav_item">
        <div class="item_title">卷烟机QWER</div>
        <detail :detailOptions="{name:'编号：', content:msg}"></detail>
        <detail :detailOptions="{name:'班次：', content:'A'}"></detail>
        <detail :detailOptions="{name:'班别：', content:'甲'}"></detail>
        <detail :detailOptions="{name:'生产日期：', content: '2016-01-01'}"></detail>
      </div>
      <div class="left_nav_item">
        <div class="item_title color-orange">中华（软）条烟</div>
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
        </div>
      </div>
    </div>
    <!--左侧导航栏end-->

    <!--右侧router-->
    <div class="right_wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import detail from '../base/detail'
  import leftNavSign from '../base/leftNavSign'
export default {
  name: 'layout',
  components: {detail, leftNavSign},
  data () {
    return {
      msg: 'YC1313123',
      aaa: "hoo~"
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
  .wrap{
    width: 100%;
    overflow: hidden;
    .left_nav_wrap{
      position: absolute;
      top: 0px;
      left: 0px;
      bottom: 0px;
      width: $left-nav-width;
      background-color: $left-nav-bg;
      text-align: center;
      padding: 15px 25px;
      .left_nav_item{
        display: block;
        padding: 10px 2px;
        text-decoration: none;
        color: $left-nav-item-title;
        img{
          margin: 0 auto;
          width: 125px;
          height: 125px;
        }

        .item_title{
          @include ell();
          font-weight: $font-weight-default;
          font-size: $title-fontSize;
          padding: 10px;
          &.color-orange{
            color: $big-title;
          }
        }
        .item_content{
          font-weight: $font-weight-default;
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
    }


    .right_wrap {
      position: absolute;
      top: 0px;
      left: $left-nav-width;
      bottom: 0px;
      right: 0px;
      background-color: $red-light;
    }
  }
</style>
