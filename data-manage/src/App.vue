<template>

  <div class="wrapper">
    
    <!-- <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">Vue-cli</div>

            <ul class="navbar-list">
              
              <li class="navbar-item" v-for="link in links" :key="link.title">
                 <router-link class="navbar-link" :title="link.title" :to="link.url">{{link.title}}</router-link>
              </li>
             
            </ul>

          </div>
        </div>
      </div>
    </header> -->

<!-- begin table -->
  <div class="container">
  <div id="vue-table">
    
    <!-- <input type="text" v-model="search" class="form-control" /> -->
     <search 
            :value="search"
            
            @search="search = $event"
            />
    
    <table class=" table-striped">
      
      <!-- <thead>
        <tr>
          <th v-for = "(col, i) in columns" :key="i">
            
              <a href="#" 
               @click="sortBy(col)"
               :class="{'active': sortKey == col}"
               >
              
              {{ col | capitalize }} 
            </a>
          </th>
        </tr>
      </thead> -->
        
      <tbody>  
      <rows :rows="this.$store.getters.allRows"/>     
      </tbody>
    </table>  
  </div>
</div>

  </div>
</template>

<script>

import MY_JSON from '@/test.json'
import search from '@/components/Search.vue'
import rows from '@/components/Rows.vue'

export default { 
  components: {
    // message:message
     search, rows
  },
  data() {
    return {
        links: [
        {
          title:'Home',
          url: '/'
        },
        {
          title:'Example',
          url: '/example'
        }
      ],
    sortKey: '',
    
    search: '',
    
    reverse: false
    
    
    }
  },

 
        
   methods: {
    // sortBy: function(sortKey) {
    //   this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
    //   this.sortKey = sortKey;
    // },
    // sorting: function(arr,value) {
    //     if (value == 'age') {
    //       arr.sort((a,b)=> a[value] - b[value])
    //     } else arr.sort((a,b)=>a[value].toLowerCase()<b[value].toLowerCase() ? -1: 1);
    // }
    
   },

  filters: {
  
  // filterBy: function(person) {
  //         return person.name.indexOf(this.search) != -1
  //         || person.age.indexOf(this.search) != -1
  //         ;
  // }
}
}
</script>

<style lang="scss">
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar-link {
  &.router-link-exact-active {
    color:blue;
  }
}


</style>
