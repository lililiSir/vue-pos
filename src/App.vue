<template>
  <div id="app">
    <left></left>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import left from '@/components/common/leftSlide'
export default {
  name: 'App',
  components:{
    left:left
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  background-color:#fff;
  width: 93%;
  height: 100%;
  float: left;
  overflow: hidden;
}
</style>
