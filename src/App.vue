<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <wocao></wocao>
  </div>
</template>

<script>
  import wocao from '@/components/text'
export default {
  name: 'app',
  components: {wocao}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
