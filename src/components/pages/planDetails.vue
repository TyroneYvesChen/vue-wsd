<template>
  <div class="planDetails">
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <div class="details_wrap clearfix">
          <div class="col-4 details_item">
            <ul class="ul_wrap" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20">
              <div class="ul_title">交接班确认</div>
              <transition-group enter-active-class="animated fadeIn">
                <li v-for="(item, index) in list" class="item_li clearfix" @click="liClickEvent" :class="{checked: isChecked}" :key="index">
                  <div class="li_title"></div>
                  <div class="li_detail icon_1">下存录入</div>
                  <div class="li_content">详情详情详情</div>
                </li>
              </transition-group>
            </ul>
          </div>

          <div class="col-4 details_item">
            <ul class="ul_wrap">
              <div class="ul_title">交接班确认</div>
              <transition-group enter-active-class="animated fadeIn">
                <li class="item_li clearfix plan_manager" @click="tocardTaskName" :class="{checked: isChecked}" :key="1">
                  <div class="li_title">调牌任务</div>
                  <div class="li_detail">下存录入</div>
                  <div class="li_content">详情详情详情</div>
                </li>

                <li class="item_li clearfix unexecuted" :key="2">
                  <div class="li_title">工单</div>
                  <div class="li_detail icon_1no">下存录入</div>
                  <div class="li_content">详情详情详情</div>
                </li>
                <li class="item_li clearfix plan_manager" :key="2" @click="toworkOrderManage">
                  <div class="li_title">工单</div>
                  <div class="li_detail">下存录入</div>
                  <div class="li_content">15:40</div>
                </li>
                <li class="item_li clearfix" :key="2" @click="toqualityExamine">
                  <div class="li_title"></div>
                  <div class="li_detail">质量质检</div>
                  <div class="li_content">15:40</div>
                </li>
              </transition-group>
            </ul>
          </div>
        </div>
      </mt-swipe-item>

      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>



  </div>
</template>

<script>
  import spinner from '../base/spinner'
export default {
  name: 'planDetails',
  components: {spinner},
  data () {
    return {
      list: [0,1,,,,,,],
      loading: true,      //设置成false使用
      toolBarObj: {
        isSave: false,
        topTitle: "工单管理"
      },
      isChecked: false
    }
  },
  created (){

  },
  methods: {
    liClickEvent (){
      this.todownSaveConfirm()
      this.isChecked = !this.isChecked
    },
    toworkOrderManage(){
      this.$router.push("workOrderManage")
    },
    todownSaveConfirm(){
      this.$router.push("downSaveConfirm")
    },
    tocardTaskName(){
      this.$router.push("cardTaskName")
    },
    toqualityExamine (){
      this.$router.push("qualityExamine")
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
  @mixin icon($number) {
    @for $index from 1 through $number
    {
      .icon_#{$index}{
        background: url("../../assets/img/planDetails/icon_#{$index}.png") no-repeat left center;
      }
      .icon_#{$index}no{
        background: url("../../assets/img/planDetails/icon_#{$index}no.png") no-repeat left center;
      }
      .icon_#{$index}yes{
        background: url("../../assets/img/planDetails/icon_#{$index}yes.png") no-repeat left center;
      }
    }
  }

  .planDetails{
    /*padding-bottom: 20px;*/
    height: 100%;
    width: 100%;
    .details_wrap{
      background-color: $right-wrap-bg;
      height: 100%;
      width: 100%;
      .details_item{
        /*height: 50%;*/
        height: 100%;
        padding: $padding-all-small;

        .ul_wrap{
          background-color: $white-base;
          border-radius: $border-radius-default;
          height: 100%;
          overflow-y: auto;
          padding: 10px;

          .ul_title{
            text-align: left;
          }
          .item_li{
            transition: all 0.5s;
            margin: $margin;
            border-radius: $border-radius-default;
            background-color: $item-bg;
            height: 100px;
            padding: $padding-all-small;
            &.plan_manager{
              text-align: left;
              .li_detail, .li_content{
                font-size: $content-fontSize;
                letter-spacing:normal;
                padding-left: 20px;
              }
              .li_detail{
                color: $big-title;
                font-weight: $font-weight-default;
                padding: 10px 0px 10px 20px;
              }
            }

            &.checked{
              background-color: $item-yes-bg;
              .li_title, .li_detail, .li_content{
                color: $item-yes;
                transition: all 0.5s;
              }
            }
            &.unexecuted{
              background-color: $item-bg-unexecuted;
              .li_title, .li_detail, .li_content{
                color: $item-font-unexecuted;
                transition: all 0.5s;
              }
            }

            .li_title{
              font-weight: $font-weight-default;
              width: 100%;
              height: 20px;
            }
            .li_title, .li_detail{
              color: $font-color-default;
            }
            .li_title, .li_content{
              font-size: $content-fontSize;
            }
            .li_detail{
              font-size: $title-fontSize;
              padding: 6px 0px 6px 40px;
              display: inline-block;
              letter-spacing:12px;
            }
            .li_content{
              color: $font-color-item;
            }
          }
        }
      }
    }
  }

  @include icon(13);

</style>
