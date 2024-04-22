import axios from 'axios'
import VueCookies from 'vue-cookies';
import store from "../store/index.js"
let baseURL  = 'https://game.bcclock.com/api/snakeGame/';

// let baseURL = 'http://192.168.18.18:8889/api/snakeGame/';

export function requestGet(url, params) {
	
	console.log(store.state.walletAddress)
	let token = VueCookies.get('token' + store.state.walletAddress.toLowerCase()) ;
	axios.defaults.headers['Content-Type'] = 'application/json';
	axios.defaults.headers['X-token'] = token;
	axios.defaults.baseURL = baseURL;
	window.axios = axios;
	return axios({
			method: 'get',
			url: url,
			params:params,
		});
		
}

export function requestPost(url, params) {
	let token = VueCookies.get('token' + store.state.walletAddress.toLowerCase()) ;
	axios.defaults.headers['Content-Type'] = 'application/json';
	axios.defaults.headers['X-token'] = token;
	axios.defaults.baseURL = baseURL;
	return axios({
			method: 'post',
			url:  url,
			data:params,
		});
}
