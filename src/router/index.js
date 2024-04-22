

const HomeIndex = () =>
	import('../components/HomeIndex')
const Game = () =>
	import('../components/Game/Game')	

export default {
	base: '/',
	routes: [{
		path: '/HomeIndex',
		name: 'HomeIndex',
		component: HomeIndex
	},{
		path: '/Game',
		name: 'Game',
		component: Game
	}]
}