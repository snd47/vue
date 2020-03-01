<template>
  <div>
    <thead>
      <tr>
        <th colspan="3" style="text-align:right">
          <a href="#" @click="totaling()">Total</a>
        </th>
        <th style="text-align:center">{{total}}</th>
      </tr>

      <tr>
        <th v-for="(row,j) in Object.keys(filteredRows[0])" :key="j">
          <a
            href="#"
            @click="sorting(filteredRows, row)"
            class="table-head-row"
          >{{ row | capitalize }}</a>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(man,i) in filteredRows" :key="i">
        <td v-for="(val,k) in filteredRows[i]" :key="k">
          <div v-if="elId===k+i">
            <input
              v-model="editValue"
              :placeholder="val"
              :key="componentKey"
              v-focus
              @blur="clicked=true"
              @keyup.enter.prevent="forceRerender(); clicked=false; "
              @keydown.esc="clicked=false; newValue  = oldValue"
            />
            <!-- <button @keyup.enter.prevent="forceRerender(); note.editing=false">Save</button> -->
            <!-- <button @click="disableEditing"> Cancel </button>
            <button @click="saveEdit"> Save </button>-->
          </div>
          <div v-if="elId!=k+i">
            <div @click="editing(val,i,k)" :id="elId">{{ val }}</div>
          </div>
        </td>
      </tr>
    </tbody>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      sortedFlag: false,
      total: "0",

      editVal: "",
      // editing: false,
      oldValue: null,
      newValue: null,
      clicked: false,
      elKeyName: null,
      elIndex: null,
      elId: null,
      componentKey: 0
    };
  },

  computed: {
    filteredRows() {
      try {
        let a = this.$store.getters.getFilteredRow || this.$store.getters.allRows;
        return a;
      } catch (e) {
        console.log(e);
      }
    },
    editValue: {
      get() {
        // return this.oldValue
        // return this.$store.state.editElement
        // return this.$store.getters.getEditValue
      },
      set(value) {
        value = [this.elIndex, this.elKeyName, value];
        this.$store.commit("SET_NEW_VALUE", value);
      }
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  },
  methods: {
    execute() {
      this.$store.dispatch("SET_ROW");
    },

    old(value) {
      // value = this.oldValue
      this.$store.commit("SET_OLD_VALUE", value);
    },

    editing(val, i, k) {
      this.oldValue = val;
      this.clicked = true;
      this.elIndex = i;
      this.elKeyName = k;
      this.elId = k + i;
    },
    disableEditing: function() {
      this.tempValue = null;
      this.clicked = false;
    },
    saveEdit: function() {

      this.disableEditing();
    },

    sorting(arr, value) {
      if (value != "id") {
        if (this.sortedFlag == false) {
          arr.sort((a, b) => (a[value] < b[value] ? -1 : 1));
          this.sortedFlag = true;
        } else {
          arr.sort((a, b) => (a[value] > b[value] ? -1 : 1));
          this.sortedFlag = false;
        }
      }
    },
    totaling() {
      let arr =
        this.$store.getters.getFilteredRow || this.$store.getters.allRows;
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += +arr[i].currency;
      }
      this.total = sum;
    },
    forceRerender() {
      this.componentKey += 1;
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    lowelize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toLowerCase() + value.slice(1);
    },
    truncate(value) {
      if (typeof value == "string") {
        return value.slice(0, 3) + "...";
      }
      return value;
    },
    clicker(value) {
      if (this.clicked) {
        console.log(value);
      }
      return value;
    }
  }
};
</script> 


<style lang="scss" >
.table-head-row {
  padding: 20px;
}

thead {
  tr:first-child {
    background-color: #f7f7f7;
    transition: 0;
    box-shadow: 0;
    &:hover {
      box-shadow: none;
      transform: none;
      transition-delay: 0;
    }
  }

  th {
    color: darkorange;
    a {
      color: green;
    }
  }
}
</style>