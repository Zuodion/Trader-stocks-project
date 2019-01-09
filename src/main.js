import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store'
import axios from 'axios';
Vue.prototype.$http = axios;
axios.defaults.baseURL = "https://save-stockes.firebaseio.com/"
import {routes} from './routes'

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.filter('currency', (value) => {
  return '₴' + value.toLocaleString()
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')