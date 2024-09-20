<template>
	<div class="page">
		<img class="logo" src="../assets/logo2.png"/>
		<div class="logo-name">K e C h a t</div>
		<button class="download" @click="openUrl">
			<!-- <img v-if="test" src="../assets/android.png" />
			<img v-else src="../assets/apple.png" /> -->
			<span>为 {{isIOS ? 'IOS' : 'Android'}}</span>
			<span> 下载</span>
		</button>
	</div>
</template>

<script>
	export default {
		name: 'DownLoad',
		data(){
			return{
				test:false,
				isIOS: false,
				isAndroid: false,
				androidUrl: 'http://kechat.keynes.pro/kechat.apk',
				iosUrl: 'https://testflight.apple.com/join/W353X1d2'
			}
		},
		mounted() {
			const userAgent = navigator.userAgent || navigator.vendor || window.opera;
			this.isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window.MSStream);
			this.isAndroid = /android/i.test(userAgent);
		},
		methods:{
			openUrl(){
				if(this.isAndroid){
					window.open(this.androidUrl)
				}else if(this.isIOS){
					window.open(this.iosUrl)
				}
			}
		}
	}
</script>

<style scoped>
	.page{
		background: #000;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.logo{
		width: 7rem;
		height: 7rem;
		border-radius: 10px;
	}
	.download{
		background: #FED501;
		color: #000;
		font-size: 18px;
		padding: 0;
		border: none;
		width: 16.5rem;
		height: 2.8125rem;
		line-height: 2.8125rem;
		margin-top: 12.5rem;
		border-radius: 5px;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.download img{
		width: 25px;
		height: 25px;
	}
	.logo-name{
		color: #fff;
		font-size: 20px;
		font-weight: 500;
		margin-top: 10px;
	}
	
</style>