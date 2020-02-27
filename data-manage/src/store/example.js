export default {
    state: {
        message: 'Hello Vuex!'
    },
    // mutations(setter) for change state  
    mutations: {
        // setMessage(state, payload) {
        //     state.message = payload
        // }
        setMessage(state, message) {
            state.message = message
        }
    },
    // actions(setter) for async data
    actions:{
        // we take all data from component as payload
        setMessage({commit}, payload) {
            // let mes = API
            // let mes2 = getters.getMessage()
            // commit('setMessage', {mes, mes2})
        // and send payload to mutations
            commit('setMessage', payload)
        } 
        
    },
    // bring data from state with getters
    getters: {
        getMessage(state) {
            return state.message
        }
    }
}