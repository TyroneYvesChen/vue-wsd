<template>
  <mt-popup v-model="isShow"
            popup-transition="popup-fade"
            class="mint-popup-1"
            :modal="isModal"
            :closeOnClickModal="isCloseOnClickModal"
            :style="styleObj"
            @click.native.stop>
    <slot></slot>
  </mt-popup>
</template>

<script>
export default {
  name: 'myModal',
  components: {},
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    pupPositionFn: {
      type: Function,
      default: () => {
        return false
      }
    },
    dom: {
      type: HTMLElement,
      default: () =>{
        return document.body
      }
    },
    isModal: {
      type: Boolean,
      default: false
    },
    isCloseOnClickModal: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      styleObj: {}
    }
  },
  computed: {

  },
  created (){

  },
  mounted() {

  },
  watch: {
    isShow (){
      this.getPositionStyle()
    },
    dom (){
      this.getPositionStyle()
    }
  },
  methods: {
    getPositionStyle (){
      let dom = this.dom,
        obj = dom.getBoundingClientRect(),
        style = {
          top: obj.bottom + 20 + 'px',
          left: obj.left + 'px'
        }
      this.styleObj = this.pupPositionFn(obj) || style
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
  //模态框
  .mint-popup-1 {
    width: 200px;
    border-radius: 8px;
    padding: 10px;
    transform: translate(-50%, 0);
    box-shadow: #ccc 1px 1px 25px 6px;
    h1 {
      font-size: 20px;
      color: #26a2ff;
    }

    p {
      margin-bottom: 10px;
    }
  }

  .mint-popup-1::before {
    display: inline-block;
    width: 0;
    height: 0;
    border: solid transparent;
    border-width: 10px;
    border-bottom-color: #fff;
    content: "";
    position: absolute;
    top: -20px;
    right: 50px;
  }
</style>
