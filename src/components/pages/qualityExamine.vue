<template>
  <div class="qualityExamine">

    <right-content-tool-bar :toolBarObj="toolBarObj"></right-content-tool-bar>

    <div class="clearfix">
      <div class="ul_wrap col-10">
        <!--已经保存的头部-->
        <ul class="item-wrap" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20">
          <li class="clearfix item_li">

            <div class="col-1 count">1</div>

            <div class="col-11 border_left">

              <div class="item_div clearfix">

                <div class="time_pre col-2">
                  <div>前道</div>
                  <div>09:30:00</div>
                </div>

                <ul class="item_details col-10 clearfix">
                  <li class="item_li_checked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                  <li class="item_li_checked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                  <li class="item_li_checked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                  <li class="item_li_checked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                  <li class="item_li_checked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                  <li class="item_li_checked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                </ul>

              </div>

              <div class="item_div clearfix">

                <div class="time_next col-2">
                  <div>后道</div>
                  <div>09:30:00</div>
                </div>

                <ul class="item_details col-10 clearfix">
                  <li class="item_li_checked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                  <li class="item_li_checked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                  <li class="item_li_checked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                  <li class="item_li_checked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                  <li class="item_li_checked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                </ul>

              </div>

            </div>
          </li>
        </ul>
        <!--已经保存的尾部-->

        <!--新建的头部-->
        <ul class="item-wrap new_project">
          <li class="clearfix item_li">

            <div class="col-1 count">1</div>

            <div class="col-11 border_left">

              <div class="item_div clearfix">

                <div class="time_pre col-2">
                  <div>前道</div>
                  <div>09:30:00</div>
                </div>

                <ul class="item_details col-10 clearfix">
                  <li class="item_li_unchecked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                  <li class="item_li_unchecked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                  <li class="item_li_unchecked checked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                  <li class="item_li_unchecked checked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                  <li class="item_li_unchecked checked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                </ul>

              </div>

              <div class="item_div clearfix">

                <div class="time_next col-2">
                  <div>后道</div>
                  <div>09:30:00</div>
                </div>

                <ul class="item_details col-10 clearfix">
                  <li class="item_li_unchecked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                  <li class="item_li_unchecked">
                    <div class="item_li_bg">
                      <img src="../../assets/img/qualityExamine/star.png">
                      条盒外封、条封
                    </div>
                  </li>
                </ul>

              </div>

            </div>
          </li>
        </ul>

        <!--新建的尾部-->
      </div>







      <ul class="col-2 right_nav">
        <div class="add_new" @click="rightNav">
          <img src="../../assets/img/qualityExamine/new.png" alt="">
          新增
        </div>

        <keep-alive>
          <transition-group enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutUp">
            <li class="item_li_new" v-for="( item, index ) in list"
                :class="{checked: index === liInedx}" :key="index"
                @click="toolClick(index)"
                v-if="isRightNavShow">
              <img src="../../assets/img/qualityExamine/circle.png">
              加密检查正常
            </li>
          </transition-group>
        </keep-alive>
      </ul>
    </div>


    <spinner></spinner>

  </div>
</template>

<script>
  import rightContentToolBar from '../common/rightContentToolBar'
  import spinner from '../base/spinner'
export default {
  name: 'qualityExamine',
  components: {rightContentToolBar, spinner},
  data () {
    return {
      list: [0,1,,,],
      loading: true,      //设置成false使用
      checkedObi: {},
      liInedx: null,
      toolBarObj: {
        isSave: true,
        topTitle: "质量自检"
      },
      isRightNavShow: false
    }
  },
  created (){

  },
  methods: {
    rightNav (){
      this.isRightNavShow = !this.isRightNavShow
    },
    toolClick (index){
//      this.$set(this.checkedObi,index,!this.checkedObi[index])
      if (this.liInedx === index) this.liInedx = null
      else this.liInedx = index
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

  $weight_li: 100% / 5;

  .qualityExamine{
    padding-bottom: 20px;
    .item-wrap{
      .item_li{
        padding: $padding;
        transition: all 0.5s;
        margin-bottom: 10px;
        background-color: $item-bg-unexecuted;
        text-align: left;
        font-size: $content-fontSize-small;
        color: $font-color-default;
        display: flex;
        align-items: center;
        .border_left{
          border-left: 1px solid #999;
        }
        .count{
          text-align: center;
          flex:1
        }
        .item_div{
          display: flex;
          align-items: center;
          .time_pre, .time_next{
            flex: 1;
            >div{
              padding-top: 5px;
            }
          }
          .item_details{
            .item_li_checked, .item_li_unchecked{
              float: left;
              width: $weight_li;
              margin: 5px 0;
              padding: 0px 5px;
              .item_li_bg{
                border-radius: $border-radius-default;
                text-align: center;
                padding: $padding-all-small;
                img{
                  margin: 5px auto;
                }
              }
            }
          }
        }
      }


      &.new_project{
        margin-top: 40px;
        .item_li{
          background-color: $item-bg;
          .item_details {
            .item_li_unchecked {
              .item_li_bg{
                background-color: $white-base;
              }

              &.checked{
                .item_li_bg{
                  border: 1px solid #888;
                  background-color: #B9E7FF;
                }
              }
            }
          }
        }
      }
    }





    .right_nav{
      background-color: $item-bg;
      padding: $padding-all-small;
      >div, li{
        border-radius: $border-radius-default;
      }

      .add_new{
        font-size: $content-fontSize;
        color: $white-base;
        padding: 30px 20px;
        background: $big-title;
        img{
          display: inline-block;
          vertical-align: bottom;
        }
      }

      .item_li_new{
        text-align: center;
        color: $font-color-default;
        font-size: $content-fontSize-small;
        padding: $padding;
        margin-top: 10px;
        box-sizing: border-box;
        img{
          margin: 5px auto;
        }
        &.checked{
          border: 1px solid #888;
          background-color: #B9E7FF;
        }
      }
    }
  }
</style>
