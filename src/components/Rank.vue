<template>
	<div id="mainy">
		
	</div>
</template>

<script>
	export default {
		name: 'HomeIndex',
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
				
				
			}
		},
		destroyed() {
		},
		methods: {
		}
	}
</script>
<style >
</style>