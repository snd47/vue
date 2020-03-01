<template>
  <div class="wrapper">
    <div class="container">
      <div id="vue-table">
        <search :value="search" @search="search = $event" />
        <table class="table-striped">
          <tbody>
            <rows :rows="this.$store.getters.allRows" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import MY_JSON from "@/test.json";
import search from "@/components/Search.vue";
import rows from "@/components/Rows.vue";

export default {
  components: {
    search,
    rows
  }
};
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar-link {
  &.router-link-exact-active {
    color: blue;
  }
}
</style>
