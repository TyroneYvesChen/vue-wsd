<template>
  <div class="workOrderManage">

    <right-content-tool-bar :toolBarObj="toolBarObj"></right-content-tool-bar>
    <ul class="item-wrap" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20">

      <transition-group enter-active-class="animated fadeIn">
          <li v-for="(item, index) in list" class="item_li clearfix"
              @click="liClickEvent($event, index)"
              :class="{checked: isCheckedObj[index]}"
              :key="index"
              ref="modalDom">
            <div class="content_detail">
              <div class="detail_title clearfix">
                <div class="col-6" :class="{checked: isCheckedObj[index]}">{{ item.title }}</div>
                <div class="col-6 state">状态：等待</div>
              </div>

              <div class="detail_code col-12">{{ item.id }}</div>

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
                  <span>{{ item.num }}</span>
                  万支
                </div>
              </div>
            </div>

            <div class="btn_group">
              <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                  <btn-group v-show="isCheckedObj[index]"
                             @technologyStandard="technologyStandard(index)"></btn-group>
              </transition>
            </div>

          </li>
      </transition-group>



    </ul>

    <spinner></spinner>
    <v-modal :isShow.sync="isShow" class="modalStyle" :dom="domChecked" :isModal="true">
      进行下一步操作
    </v-modal>
  </div>
</template>

<script>
  import rightContentToolBar from '../common/rightContentToolBar'
  import btnGroup from '../common/btnGroup'
  import spinner from '../base/spinner'
  import vModal from '../common/myModal'
export default {
  name: 'workOrderManage',
  components: {rightContentToolBar, spinner, btnGroup, vModal},
  data () {
    return {
      list: [
        {
          title: "中华（软）条烟",
          id: "107615YCJJ801_JB_1",
          num: 359
        },
        {
          title: "熊猫（硬5盒时代版出口）C版Ck-条烟",
          id: "107615YCJJ801_JB_1",
          num: 233
        },
        {
          title: "中华（硬出口）D版格鲁吉亚版-条烟",
          id: "107615YCJJ801_JB_1",
          num: 285
        },
        {
          title: "中华（软）条烟",
          id: "107615YCJJ801_JB_1",
          num: 326
        },
        {
          title: "熊猫（硬5盒时代版出口）C版Ck-条烟",
          id: "107615YCJJ801_JB_1",
          num: 260
        },
        {
          title: "中华（硬出口）D版格鲁吉亚版-条烟",
          id: "107615YCJJ801_JB_1",
          num: 219
        }
        ],
      loading: false,      //设置成false使用
      toolBarObj: {
        isSave: false,
        topTitle: "工单管理"
      },
      isChecked: false,
      isCheckedObj: {},
      isShow: false,
      domChecked: document.body
    }
  },
  created (){

  },
  computed: {
  },
  watch: {
  },
  methods: {
    technologyStandard (index){
      this.isShow = true
      this.domChecked = this.$refs.modalDom[index]
    },
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
        let last;
        for (let i = 1; i <= 10; i++) {
          last = this.list[this.list.length % 6]
          this.list.push(last);
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
  .modalStyle{
    height: 300px;
    width: 300px!important;
    line-height: 300px;
    font-size: $title-fontSize;
    background-color: #ccc;
    display: block;
  }
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
