<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">
          <button class="btn btnPrimary" @click="modalFirst= !modalFirst">Show first modal</button>
          <!-- first modal -->
          <modals 
            title="First mod"
            floor="2019"
            v-if="modalFirst"
            @close="modalFirst= !modalFirst"
          >
            <!-- use <form> <ul> or other tag with slot name-->
            <div slot="body">
                  <p>Text Text Text</p>
                  <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Well Done!</button>
            </div>

            <div slot="footer">
                  <p>real footer</p>
            </div>



          </modals>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import modals from '@/components/Modal.vue'

export default { 
  name: 'modals app',
  components: {
    modals
  },
  data() {
    return {
      modalFirst:false
    }
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
