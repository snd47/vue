<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <div id="app">
        <h1>Template vue-cli</h1>
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </div>


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default { 
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
