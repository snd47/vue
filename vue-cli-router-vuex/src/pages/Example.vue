<template>
    <div class="wrapper-content wrapper-content--fixed">
      <div id="app">
        <h1>HELLO HOME EXAMPLE</h1>
        
        <p>{{getMessage}}</p>
        <p>{{message}}</p>
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
  computed: {
    getMessage() {
      return this.$store.getters.getMessage
    }
  }
}
</script>
