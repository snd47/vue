import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import example from './example'

// import example from './users'
// import example from './auth'

export default new Vuex.Store({
    modules: {
        example
        // users,
        // auth
        
    },
    state: {

    },
    mutations: {
        getPosts() {
            
        }
    }
})