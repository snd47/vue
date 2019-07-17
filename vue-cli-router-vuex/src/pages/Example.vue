<template>
    <div class="wrapper-content wrapper-content--fixed">
      <div id="app">
        <h1>Example Page</h1>
        <input type="text" v-model="message">
        <button class="btn btnPrimary" @click="setMessage">Change message</button>
        <br><br>

        <p>{{getMessage}}</p>
        <!-- <p>{{message}}</p> -->
     
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
    // this.message = this.$store.getters.getMessage
    this.message = "default example message"
  },
  computed: {
    getMessage() {
      return this.$store.getters.getMessage
    }
  },
  methods: {
    setMessage() {
      // use setMessage from action store and send this.message to store(also we can send objects etc)
      this.$store.dispatch('setMessage', this.message)
    }
  }
}
</script>
