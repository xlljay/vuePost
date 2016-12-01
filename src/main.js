import Vue from 'vue'
// import Vuex from 'vuex'
import VueRouter from 'vue-router'
import List from './list.vue'
import Posting from './components/posting.vue'
import Subset from './components/subset.vue'
import store from './store.js'
Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/list', component: List
			// children: [
			// 	{ path: '/detail', component: Detail},
				
			// ]
		},
		{ path: '/posting', component: Posting},
		{ path: '/subset/:id', component: Subset }
		
	]
})
const app = new Vue({store,router}).$mount('#app')
const may = new Vue({store,router}).$mount('#may')
