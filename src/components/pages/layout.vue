<template>
  <div class="wrap clearfix">
    <!--左侧导航栏start-->
    <left-nav id="left_nav"></left-nav>
    <!--左侧导航栏end-->

    <!--右侧router-->
    <div class="right_wrap">
      <right-header-nav></right-header-nav>
      <div class="right_content">
        <div class="router-bg">
            <transition enter-active-class="animated fadeIn">
              <router-view></router-view>
            </transition>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import leftNav from '../common/leftNav'
  import rightHeaderNav from '../common/rightHeaderNav'

export default {
  name: 'layout',
  components: {leftNav, rightHeaderNav},
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
  .wrap{
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;


    .right_wrap {
      position: absolute;
      top: 0px;
      left: $left-nav-min-width;
      bottom: 0px;
      right: 0px;
      background-color: $right-wrap-bg;
      .right_content{
        padding: $tool-padding;
        position: absolute;
        top: $header-height;
        left: 0px;
        bottom: 0px;
        right: 0px;
        .router-bg{
          border-radius: $border-radius-default;
          background-color: $white-base;
          height: 100%;
          overflow-y: auto;
        }
      }
    }
  }
</style>
