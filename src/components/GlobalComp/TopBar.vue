<template>
	<div >
		<div class="home-top">
			<div style="display: flex;align-items: center;">
				<img class="avatar" src="../../assets/cat1.png" />
				<div class="name">Aini</div>
			</div>
			<div>{{ wallet }}</div>
			<div class="balance" @click="connect">
				<div>TMT: 0</div>
				<div style="width: 10px;"></div>
				<div>TON: 0</div>
				<button  id="ton-connect"></button>
			</div>
		</div>
	</div>
</template>

<script>
import {TonConnectUI} from '@tonconnect/ui'


console.log('TonConnectUI',TonConnectUI)
	export default {
		name: 'TopBar',
		props: {},
		components:{
		},
		
		updated(){
		},
		async mounted() {
			
		},
		data() {
			return {
				tonConnectUI:{},
				wallet:''
			}
		},
		destroyed() {
		},
		
		methods: {
			async connect(){
				let _this = this;
				this.tonConnectUI = new TonConnectUI({
					manifestUrl: 'https://game.bcclock.com/tonweb/tonconnect-manifest.json',
					buttonRootId: 'ton-connect'
				});
				const unsubscribe = tonConnectUI.onStatusChange(
					walletAndwalletInfo => {
						// update state/reactive variables to show updates in the ui
						if(tonConnectUI.account && tonConnectUI.account != ''){
							_this.wallet = tonConnectUI.account
						}
						
					} 
				);
			}
		}
	}
</script>
<style scoped>
   
	.avatar{
		width: 40px;
		height: 40px;
		border-radius: 50% 50%;
		margin-left: 15px;
		background: #0088cc;
	}
	.name{
		
		font-weight: 600;
		margin-left: 10px;
	}
	.balance{
		height: 35px;
		background: #fff;
		border-radius: 20px;
		margin-right: 15px;
		display: flex;
		align-items: center;
		padding: 0 10px;
		font-size: 12px;
		font-weight: 600;
	}
    .home-top{
		width:100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 50px;
		background: rgba(0, 0, 0, 0.07);
	}
</style>