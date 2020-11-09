import Vue from 'vue';
import App from './App';
import { BootstrapVue } from 'bootstrap-vue'
import VueAnime from 'vue-animejs';



import VueRouter from 'vue-router';
import { router } from './route';

Vue.use(VueAnime);
Vue.use(BootstrapVue);
Vue.use(VueRouter);


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
