<template>
	<div id="app">
		<TopBar></TopBar>
		<HomeIndex v-if="tabIndex == 0" @nftDetail="changeTab" ></HomeIndex>
		<UserNft v-else-if="tabIndex == 1" @nftDetail="changeTab" ></UserNft>
		<NftMarket  v-else-if="tabIndex == 2" ></NftMarket>
		<NftDetail  v-else-if="tabIndex == -1"></NftDetail>
		<NavBar @changeTab="changeTab"></NavBar>
	</div>
</template>

<script>
	import HomeIndex  from './components/HomeIndex.vue';
	import UserNft  from './components/UserNft.vue';
	import NftDetail  from './components/NftDetail.vue';
	import NftMarket  from './components/NftMarket.vue';
	import NavBar from './components/GlobalComp/NavBar.vue';
	import TopBar from "./components/GlobalComp/TopBar.vue";
	
	export default {
		name: 'App',
		data() {
			return{
				network: '',
				lang: true,
				pagedata:{},
				tabIndex:0
			}
		},
		components:{
			HomeIndex,
			UserNft,
			NavBar,
			NftDetail,
			NftMarket,
			TopBar
		},
		async beforeMount() {
			console.log(window.screen.height, window.screen.width)
			
		},
		updated() {
			let _this = this;
			
		},
		async mounted() {
			
		},
		methods:{
			changeTab:function(index){
				this.tabIndex = index;
			}
		}
	}
</script>

<style>
	@font-face {
		font-family: "gamefont";
		src: url("assets/gamefont.ttf") format('woff');
	}
	input{
		outline:none;
	}
	html,body{
		padding: 0;
		margin: 0;
		font-family: 'gamefont';
		font-weight: 500;
		background: #f5f7f7;
	}
	
	#app{
		width: 100%;
		position: absolute;
		margin: 0 auto;
		height: 100vh;
		overflow-y: hidden;
		
	}
	.account{
		/* text-align: right; */
		color: #fff;
		display: flex;
		justify-content: space-between;
		padding: 26px;
		/* margin:20px 16px 34px 10px; */
	}
	
	/* .account div{
		background: #4A50E9;
		color: #fff;
		border-radius: 4px;
		display: inline-block;
		padding: 6px 10px;
	} */
</style>
