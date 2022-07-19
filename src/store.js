import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            images: [],
            menu : '??',
            img : 'https://source.unsplash.com/featured/?mountain',
            img2 : 'https://source.unsplash.com/featured/?water'
        }
    },
    mutations: {
        setMore(state, data) {
            state.images =  data;
        },
        setMenu(state){
            state.menu = 'mountain'
        },
        setMenu2(state){
            state.menu = 'water'
        }
    },
    actions: { 
        getData(context) {
            //https://source.unsplash.com/featured/?water/photos/random
            axios.get('https://api.unsplash.com/photos/random',{
                params: {
                  client_id:'LMocYADsnYRNA7-0pBbIZ8f2MqK7ArTnN7Bx1RXNzK4',
                  count: 30
                }
                })
                .then((a) => {
                    console.log(a)
                    context.commit('setMore', a.data)
                })
        }
    }

})

export default store;



