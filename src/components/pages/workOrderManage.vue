<template>
  <div class="workOrderManage">

    <right-content-tool-bar :toolBarObj="toolBarObj"></right-content-tool-bar>
    <ul class="item-wrap" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20">

      <transition-group enter-active-class="animated fadeIn">
          <li v-for="(item, index) in list" class="item_li clearfix" @click="liClickEvent($event, index)" :class="{checked: isCheckedObj[index]}" :key="index">
            <div class="content_detail">
              <div class="detail_title clearfix">
                <div class="col-6" :class="{checked: isCheckedObj[index]}">熊猫熊猫熊猫熊猫熊猫熊猫熊猫</div>
                <div class="col-6 state">状态：等待</div>
              </div>

              <div class="detail_code col-12">yioup][uyfgiop[]\[uiyfio</div>

              <div class="detail_plan clearfix">
                <div class="col-6">
                  <div class="plan_time">
                    <img src="../../assets/img/workOrderManage/plan-icon.png" alt="">
                    <span>计划：</span>
                    <span>05-12 14:10 — 05-12 14:10</span>
                  </div>

                  <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                    <div class="real_time" v-show="isCheckedObj[index]">
                        <img src="../../assets/img/workOrderManage/real-icon.png" alt="">
                        <span>实际：</span>
                        <span>05-12 14:10 — 05-12 14:10</span>
                      </div>
                  </transition>
                </div>

                <div class="col-6 output">
                  计划产量：
                  <span>233</span>
                  万支
                </div>
              </div>
            </div>

            <div class="btn_group">
              <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                  <btn-group v-show="isCheckedObj[index]"></btn-group>
              </transition>
            </div>

          </li>
      </transition-group>



    </ul>

    <spinner></spinner>

  </div>
</template>

<script>
  import rightContentToolBar from '../common/rightContentToolBar'
  import btnGroup from '../common/btnGroup'
  import spinner from '../base/spinner'
export default {
  name: 'workOrderManage',
  components: {rightContentToolBar, spinner, btnGroup},
  data () {
    return {
      list: [0,1,,,,,,],
      loading: false,      //设置成false使用
      toolBarObj: {
        isSave: false,
        topTitle: "工单管理"
      },
      isChecked: false,
      isCheckedObj: {}
    }
  },
  created (){

  },
  methods: {
    liClickEvent (e, index){
//      this.isChecked = !this.isChecked
      for (let k in this.isCheckedObj){
        this.isCheckedObj[k] = false
      }
      this.$set(this.isCheckedObj,index,!this.isCheckedObj[index])
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
  .workOrderManage{
    padding-bottom: 20px;
    .item-wrap{
      padding: $padding-twoSize-default;
      .item_li{
        transition: all .5s;
        border-radius: $border-radius-default;
        margin: $margin-large;
        background-color: $item-bg;
        padding: $item-padding;
        text-align: left;
        height: auto;
        &.checked{
          background-color: $item-bg-checked;
        }


        .content_detail{
          text-align: left;
          .detail_title{
            .checked{
              color: $big-title;
            }
            font-size: $title-fontSize;
            color: $font-color-default;
            .state{
              text-align: right;
              font-size: $content-fontSize;
            }
          }

          .detail_code{
            font-size: $content-fontSize;
            color: $font-color-item;
            padding-top: 10px;
            padding-bottom: 10px;
          }

          .detail_plan{
            .plan_time, .real_time{
              padding: $padding-small2;
              img, span{
                display: inline-block;
                vertical-align: bottom;

              }
              span{
                font-size: $content-fontSize;
                color: $font-color-item;
              }
            }

            .output{
              text-align: right;
              font-size: $content-fontSize;
              color: $font-color-item;
            }
          }
        }

        .btn_group{
          text-align: right;
        }
      }
    }
  }
</style>
