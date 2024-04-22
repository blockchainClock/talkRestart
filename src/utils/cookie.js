import VueCookies from 'vue-cookies';
export function setCookie(key,value, times){
	VueCookies.set(key,value,times)
}
export function getCookie(key){
	return VueCookies.get(key);
}