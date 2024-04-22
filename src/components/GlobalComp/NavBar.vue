<template>
	<div class="nav">
		<div v-for="(item,index) in tab" :class="tabIndex == index ? 'active' : ''" @click="selectTab(index)">{{ item }}</div>
	</div>
</template>

<script>
	export default {
		name: 'NavBar',
		props: {},
		components:{
		},
		computed: {
			listenLangChange() {
				return this.$store.state.lang;
			}
		},
		watch: {
			listenLangChange(lang) {
				console.log('lang change', this.$store.state.lang)
				let langTYPE = this.$store.state.lang ? 'en' : 'zh';
				this.pageData = this.$lang[langTYPE];
				this.langTYPE = this.$store.state.lang
			}
		},
		updated(){
		},
		async mounted() {
			
		},
		data() {
			return {
				tab:['Home', 'NFT', 'Market', 'Invite'],
				tabIndex:0,
			}
		},
		destroyed() {
		},
		methods: {
			selectTab:function(index){
				this.tabIndex = index;
				this.$emit('changeTab', index)
			}
		}
	}
</script>
<style>
	.nav{
		width: 85%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: absolute;
		bottom: 30px;
		border:solid 1px rgba(0, 0, 0, 0.2);
		height:40px;
		border-radius: 20px;
		left: 7%;
	}
	.nav div{
		padding: 5px 15px;
		
		border-radius: 20px;
		font-size: 14px;
		margin: 0 10px;
		font-weight: 600;
	}
	.nav .active{
		background: rgba(0, 0, 0, 0.1);
	}
</style>