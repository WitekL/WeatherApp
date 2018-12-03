import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from '@/components/Search.vue';
import Result from '@/components/Result.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Search },
  { path: '/result', name: 'result', component: Result }
]

export default new VueRouter({
  routes
});
