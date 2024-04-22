import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store =new Vuex.Store({
	state: {
		lang:false,
		tabIndex:0
	},
	mutations: {
		"SET_tabindex": function(state, tabIndex) {
			state.tabIndex = tabIndex;
		}
		
	},
	getters: {

	},
	actions: {}
});

export default store
