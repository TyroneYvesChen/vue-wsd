<template>
  <div class="cardTaskName">

    <right-content-tool-bar :toolBarObj="toolBarObj"></right-content-tool-bar>

    <ul class="item-wrap" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20">

      <transition-group enter-active-class="animated fadeIn">
        <li v-for="(item, index) in list" class="item_li clearfix" @click="liClickEvent($event)"
            :class="{checked: isChecked, unexecuted: index === 0}" :key="index">

          <div class="col-2 task_step">
            <div class="step_num">1</div>
            <div class="step_name">吊牌前</div>
          </div>
          <div class="col-7 task_content">我是内容我是内容我是内容我是内容我是内容我是内容
            我是内容我是内容我是内容我是内容！！！</div>
          <div class="col-3 task_box" :class="{checked: isChecked}">
            <div class="box_operation">材料工</div>
            <div class="box_operation">值班长</div>
          </div>

          <div class="li_line" v-if="isChecked"></div>
          <div class="line_dash" v-if="isChecked"></div>
        </li>
      </transition-group>

      <div class="line_vertical"></div>
    </ul>

    <spinner></spinner>

  </div>
</template>

<script>
  import rightContentToolBar from '../common/rightContentToolBar'
  import btnGroup from '../common/btnGroup'
  import spinner from '../base/spinner'
export default {
  name: 'cardTaskName',
  components: {rightContentToolBar, spinner},
  data () {
    return {
      list: [0,1,,,,,,],
      loading: false,      //设置成false使用
      toolBarObj: {
        isSave: false,
        topTitle: "调牌任务名称"
      },
      isChecked: false
    }
  },
  created (){

  },
  methods: {
    liClickEvent (e){
      if (e.currentTarget.classList.contains("unexecuted")) return
      this.isChecked = !this.isChecked
    },
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
  .cardTaskName{
    padding-bottom: 20px;
    .item-wrap{
      padding: 0px 40px;
      position: relative;

      .item_li{
        position: relative;
        transition: all .5s;
        margin: $margin-large;
        background-color: $item-bg;
        padding: $item-padding;
        text-align: left;
        height: auto;
        &.checked{
          background-color: $item-bg-checked;
          .task_step{
            .step_num{
              background-color: $item-blue;
            }
          }
        }
        &.unexecuted{
          background-color: $item-bg-unexecuted;
          .task_content{
            color: $font-color-item;
          }
        }

        .task_step{
          font-size: $content-fontSize;
          text-align: center;
          .step_num{
            color: $white-base;
            border-radius: 100%;
            background-color: $gray-default2;
            font-size: $title-fontSize;
            width: 40px;
            height: 40px;
            text-align: center;
            margin: 0 auto;
            line-height: 40px;
          }
          .step_name{
            color: $font-color-item;
            padding-top: 10px;
          }
        }
        .task_content{
          font-size: $title-fontSize;
          color: $font-color-default;
          @include lineNum(3);
        }

        .task_box{
          text-align: right;
          &.checked{
            width: 100%;
            .box_operation{
              background-color: $item-blue;
            }
          }

          .box_operation{
            height: 80px;
            line-height: 80px;
            width: 100px;
            font-size: $content-fontSize;
            color: $white-base;
            background-color: $gray-minor;
            display: inline-block;
            border-radius: $border-radius-default;
            text-align: center;
          }
        }

        .li_line{
          //border-left: 8px solid $big-title;
          position: absolute;
          left: -0.5px;
          top: 0px;
          bottom: 0px;
          height: 100%;
          width: 4px;
          background-color: $big-title;
          border-radius: 2px;
          z-index: 999;
        }

        .line_dash{
          position: absolute;
          left: -20px;
          right: -20px;
          bottom: -10px;
          border: 1px dashed #ccc;
        }
      }
    }

    .line_vertical{
      position: absolute;
      left: 40.5px;
      top: -20px;
      bottom: 0px;
      border: 1px solid #ccc;
    }
  }
</style>
