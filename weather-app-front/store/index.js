import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(axios);

export default new Vuex.Store({
  state: {
    weather: null
  },

  getters: {
    WEATHER: state => {
      return state.weather
    }
  },

  mutations: {
    SET_WEATHER: (state, payload) => {
      state.weather = payload
    }
  },

  actions: {
    FETCH_WEATHER: (context, payload) => {
      axios.get('http://127.0.0.1:3000/current_weather', {
        params: {
          city: payload
        }
      })
      .then((response) => {
        context.commit('SET_WEATHER', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
})
