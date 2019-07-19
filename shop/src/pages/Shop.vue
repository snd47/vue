<template>
    <div class="wrapper-content wrapper-content--fixed">
      <div id="app">
        <h1>Shop Page</h1>
        
     
      </div>
      
    </div>
</template>

<script>
export default {
  data() {
    return {
      shopList: null
    }
  },
  created() {
    
    this.shopList = this.$store.getters.getShopList
    console.log(this.shopList)
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>
