<template>
  <div class="rightHeaderNav clearfix">
    <div class="header-left">
      <img src="../../assets/img/rightHeaderNav/news.png"/>
    </div>
    <div class="information">
      <information-scroll></information-scroll>
    </div>
    <ul class="tool">
      <li class="user">
        <img src="../../assets/img/rightHeaderNav/worker.png"/>
        <div class="userInformation">
          <div class="idNum">TY8888</div>
          <div class="workType">挡车工</div>
        </div>
      </li>
      <li><img src="../../assets/img/rightHeaderNav/cut.png"/></li>
      <li><img src="../../assets/img/rightHeaderNav/logout.png"/></li>
      <li><img src="../../assets/img/rightHeaderNav/setting.png"/></li>
    </ul>
  </div>
</template>

<script>
  import informationScroll from './informationScroll'
export default {
  name: 'rightHeaderNav',
  components: {informationScroll},
  props:{
    detailOptions:{
      type: Object,
      default (){
        return {
          name: "",
          content: ""

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
  .rightHeaderNav{
    height: $header-height;
    background-color: $header-nav-bg;
    padding: $header-wrap-padding;
    .header-left{
      padding: $header-padding;
      float: left;
      img{
        height: $nav-tool-icon-size;
        width: $nav-tool-icon-size;
      }
    }
    .information{
      float: left;
      height: 80px;
    }

    .tool{
      float: right;
      li{
        padding: $tool-padding;
        display: inline-block;
        vertical-align: bottom;
        img{
          height: $nav-tool-icon-size;
          width: $nav-tool-icon-size;
        }
      }
      & .user{
        padding: 0 40px 0 20px;
        img{
          height: 70px;
          width: 70px;
          border-radius: 100%;
          border: 1px #fff solid;
          display: inline-block;
          vertical-align: bottom;
        }
        .userInformation{
          display: inline-block;
          div{
            color: $font-color-default;
            height: 25px;
            line-height: 25px;
            font-size: $content-fontSize;
          }
          & .workType{
            font-size: 15px;
          }
        }
      }
    }
  }
</style>
