<template>

  <div class="wrapper">
    
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">Vue-cli</div>

            <ul class="navbar-list">
              <li class="navbar-item">
                 <router-link class="navbar-link" to="/">Home</router-link>
              </li>
              <li class="navbar-item">
                 <router-link class="navbar-link" to="/example">Example</router-link>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

  <!-- <footer></footer> -->

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
