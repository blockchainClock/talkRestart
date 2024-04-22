import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import routes from './router/index.js'
import store from './store/index.js'
import lang from './lang/lang.js'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies';
import JSEncrypt from 'jsencrypt';
import WebApp from '@twa-dev/sdk';
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.use(VueCookies);
Vue.prototype.$cookie = VueCookies;
Vue.prototype.$lang = lang;
Vue.prototype.$WebApp= WebApp;
WebApp.ready();
WebApp.expand();
// axios.defaults.baseURL = 'http://pool.shukejujiao.com/webapi';
// axios.defaults.baseURL = window.location.origin + '/webapi';
// let token = VueCookies.get('token')
// Vue.prototype.$http = axios;
// axios.defaults.headers['X-token'] = token;

Vue.config.productionTip = false



let langTYPE = !localStorage.getItem('lang') || localStorage.getItem('lang') == 'false' ? false : true;
store.commit('SET_LANG', langTYPE)

Vue.use(VueRouter);

// Vue.prototype.$notify = Notification;
// Vue.prototype.$loading = Loading.service;
let router = new VueRouter(routes)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
