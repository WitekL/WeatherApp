import Vue from 'vue';
import router from './router.js';
import store from '../store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/reset.css'
import App from './App.vue';

Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
