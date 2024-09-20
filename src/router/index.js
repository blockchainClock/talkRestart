

const DownLoad = () =>
	import('../components/DownLoad')
	
// const HomeIndex = () =>
// 	import('../components/HomeIndex')
export default {
	base: '/',
	routes: [{
		path: '/',
		name: 'DownLoad',
		component: DownLoad
	},{
		path: '/DownLoad',
		name: 'DownLoad',
		component: DownLoad
	}]
}