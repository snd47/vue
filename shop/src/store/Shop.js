export default {
    state: {
       
        shopList: [
            {
                id:1,
                title: 'Fila Red',
                descr: 'Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Ac felis donec et odio pellentesque diam volutpat commodo sed. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Varius morbi enim nunc faucibus a pellentesque sit amet. Eu facilisis sed odio morbi quis commodo odio aenean. Vitae et leo duis ut diam quam nulla. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed.',
                img: require('../assets/img/fila_webr1.jpeg')
            }
        ]
    },
    // mutations(setter) for change state  
    mutations: {
        
    },
    // actions(setter) for async data
    actions:{
        // we take all data from component as payload
        
        
    },
    // bring data from state with getters
    getters: {
        getShopList(state) {
            return state.shopList
        }
    }
}