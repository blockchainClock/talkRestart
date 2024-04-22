<template>
	<div>
		<iframe id="ed" style="position: fixed;width: 100%;height: 100vh;left:-2px;top: -2px;" :src="'game/' + path + '/index.html'"></iframe>
		 
		<!-- <iframe id="ed" style="position: fixed;width: 100%;height: 100vh;left:-2px;top: -2px;" src="snakeGame/index.html"></iframe> -->
	</div>
</template>

<script>
	export default {
		name: 'Game',
		data(){
			return{
				path: '',
				showRelive:false
			}
		},
		mounted() {
			let query = this.$route.query.gamepath
			this.path = query;
			console.log(this.$route)
		},
		methods:{
			cancle:function(){
				document.getElementById("ed").contentWindow.reLive();
				
			},
			showPop:function(){
				this.showRelive = true;
			},
			sure:function(){
				
			}
		}
	}
</script>

<style scoped="scoped">
	
	
	
</style>
