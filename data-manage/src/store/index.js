import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import data from './Data'

export default new Vuex.Store({
    modules: {
        data
    },
    state: {

    },
    mutations: {
        getPosts() {

        }
    }
})