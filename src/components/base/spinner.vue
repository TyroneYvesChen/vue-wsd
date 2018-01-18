<template>
  <div class="spinner">
    <mt-spinner type="snake"></mt-spinner>
  </div>
</template>

<script>
export default {
  name: 'spinner',
  components: {},
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
  .spinner{
    display: inline-block;
    transition: .2s linear;
    vertical-align: middle;
  }

</style>
