<template>
    <div class="wrapper-content wrapper-content--fixed">
      <div id="app">
        <h1>HELLO HOME EXAMPLE</h1>
        
        <p>{{getMessage}}</p>
        <p>{{message}}</p>
        <input type="text" v-model="message">
        <button class="btn btnPrimary" @click="setMessage">Change message</button>
        <br><br>
      
        <p>{{getMessage}}</p>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      message:null,
    }
  },
  created() {
    this.message = this.$store.getters.getMessage
  },
  // computed: {
  //   getMessage() {
  //     return this.$store.getters.getMessage
  //   }
  // },
  methods: {
    setMessage() {
      this.$store.dispatch('setMessage', this.message)
    }
  }
}
</script>
