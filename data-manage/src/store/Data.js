import MY_JSON from '@/test.json'

export default {
    state: {
        rows: MY_JSON,
        filteredRows: null,
        row: {},
        searchWord: null,
        status: 'none',
        editElement: null,
        editValue: ''
    },

    mutations: {

        SET_ROW(state, row) {
            state.row = row
        },
        FILTERED_ROWS(state, value) {
            if (!(value) || value === '{}') {
                state.searchWord = null
                state.filteredRows = null
                console.log(state.searchWord)
                console.log(state.filteredRows)
            } else {
                state.searchWord = value
                value = value.trim().toLowerCase()
                state.filteredRows = state.rows.filter((row) => {
                    console.log(state.searchWord)
                    console.log(state.filteredRows)
                    return row.name.toLowerCase().includes(value) ||
                        row.location.toLowerCase().includes(value)
                })
            }
        },
        SET_NEW_VALUE(state, payload) {

            let [i, k, value] = payload
            // state.editValue = value
            if (state.filteredRows == null) {
                state.filteredRows = state.rows
            }
            if (state.editElement !== i + k) {
                state.filteredRows[i][k] = "";
            }
            state.filteredRows[i][k] += value.slice(-1);
            state.editElement = i + k
        },

        SET_OLD_VALUE(state, payload) {
            state.editValue = payload
        }

    },

    actions: {

        SET_ROW({ commit }, row) {
            commit('SET_ROW', row)
        },
        FILTERED_ROWS({ commit }, value) {
            commit('FILTERED_ROWS', value)
        },
        SET_NEW_VALUE({ commit }, param) {
            commit('SET_NEW_VALUE', param)

        },
        SET_OLD_VALUE({ commit }, param) {
            commit('SET_OLD_VALUE', param)
        }
    },

    getters: {
        allRows: (state) => state.rows,

        getRow: (state) => state.row,

        getSearchWord: (state) => state.searchWord,

        getFilteredRow: (state) => state.filteredRows,

        getEditValue: (state) => state.editValue

    }
}