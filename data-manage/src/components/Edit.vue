<template>

              
 </template>
 
<script>

import {mapState} from 'vuex'
export default { 
  
  data() {
    return {
         
    sortedFlag: false,
    total: '0',

    editVal: '',
    oldValue: null,
    newValue: null,
    clicked: false,
    elKeyName:null,
    elIndex: null,
    elId:null,
    componentKey: 0
 
    }
  },
 
  computed: { 

    filteredRows () {
              try {
                let a = (this.$store.getters.getFilteredRow || this.$store.getters.allRows)
                console.log(a)
                return a
              } catch (e) {
                console.log(e)
              }
            },
    editValue: {
      get () {
        // return this.oldValue
        // return this.$store.state.editElement
        // return this.$store.getters.getEditValue
      },
      set (value) {
        value = [this.elIndex, this.elKeyName, value];
       // console.log("param: "+param)
       console.log("value: "+value)
        this.$store.dispatch('SET_NEW_VALUE', value)
        // console.log("lalal: i: " + this.elIndex +"; k: "+ this.elKeyName +"; value: "+ this.newValue);
      }
    }
    },
    
    directives: {
            focus: {
                inserted (el) {
                el.focus()
            }
        }
  },
    methods: {
            execute() {
              this.$store.dispatch('SET_ROW')
            },

            old(value) {
                // value = this.oldValue
                this.$store.commit('SET_OLD_VALUE', value)
            },

            editing(val, i, k) {
                this.oldValue=val;
                this.clicked=true;
                this.elIndex=i;
                this.elKeyName=k;
                this.elId=k+i;
                 console.log( this.oldValue)
                console.log( this.elIndex+","+ this.elKeyName)
                console.log( this.elId)
            },
            disableEditing: function(){
              this.tempValue = null;
              this.clicked = false;
            },
            saveEdit: function(){
              // However we want to save it to the database
              // this.value = this.newValue;
              //this.$store.getters.getFilteredRow;

              this.disableEditing();
            },
            
            sorting(arr,value) {
              if (value != 'id') {
                if (this.sortedFlag==false) {
                  arr.sort((a,b)=> a[value] < b[value] ? -1: 1);
                  this.sortedFlag = true
                } else {
                  arr.sort((a,b)=> a[value] > b[value] ? -1: 1);
                  this.sortedFlag = false
                }
              } 
            },
            totaling() {
              let arr = this.$store.getters.getFilteredRow || this.$store.getters.allRows;
              let sum=0;
              for (let i=0;i<arr.length;i++) {
                sum+=arr[i].currency;
              }
              // let sum = this.$store.getters.getFilteredRow[0].currency;
              this.total = sum;
            },
             forceRerender() {
                this.componentKey  += 1;
                console.log(this.componentKey)  
            }
                        

            // refresh() {
            //   this.dataList = this.$store.getters.getFilteredRow
            //   if (this.dataList.length==0) {
            //     this.dataList = 'None'
            //   }
            // },
            

    },
    filters: {
          capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
          },
          lowelize(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toLowerCase() + value.slice(1)
          },
          truncate(value) {
          // console.log(word)
          // if (!value) return ''
          // let length = 3;
          // if (value.length <= length) return value;
          if (typeof value == 'string') {
          // value = value.toString()
          return value.slice(0, 3) + '...';
          }
          return value
          },
          clicker(value) {
            if (this.clicked) {
            console.log(value);
            }
            return value;
          }

    }

}
</script> 


<style lang="scss" >



.table-head-row {
  // color:red;
  padding:20px;
  // margin-right: 20px;
}

thead {
    
  tr:first-child  {
        background-color :#f7f7f7;
        transition: 0;
        box-shadow: 0;
      &:hover {
      box-shadow: none ;
      transform: none;
      transition-delay: 0;
    }
  }

  th {
     color:darkorange;
     a {
    color: green;
    }
   }
}
</style>