import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: 'Hello Vuex again!'
    },
    // mutations(setter) for change state  
    mutations: {
        // setMessage(state, payload) {
        //     state.message = payload
        // }
        setMessage(state, message) {
            state.message = 'hello from mutations'
        }
    },
    // actions(setter) for async data
    actions:{
        setMessage({commit}, payload) {
            // let mes = API
            // let mes2 = getters.getMessage()
            // commit('setMessage', {mes, mes2})
            commit('setMessage', payload)
        }
        
    },
    // bring data from state with getters
    getters: {
        getMessage(state) {
            return state.message
        }
    }
})