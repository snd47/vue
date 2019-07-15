import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: 'Hello Vuex again!'
    },
    // mutations(setter) for change state  
    mutations: {
        setMessage(state, payload) {
            state.message = payload
        }
    },
    // actions(setter) for async data
    actions:{
        setMessage({commit}) {
            let mes = API
            let mes2 = getters.getMessage()
            commit('setMessage', {mes, mes2})
        }
    },
    // bring data from state with getters
    getters: {
        getMessage(state) {
            return state.message
        }
    }
})