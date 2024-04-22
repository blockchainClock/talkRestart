<template>
	<div class="home">
		<!-- user balance and user info -->
		

		<!-- usernfy -->
		<div class="user-nft">
			<div class="nft-card">
				<swiper class="swiper" :swiperOption="swiperOption">
					<swiperSlide class="swiperItem">
						<div class="slide-content" @click="nftDetail">
							<div class="rarity"><span class="label">Common</span></div>
							<img class="nft-item" src="../assets/cat2.png" />
							<div class="nft-atttr">
								<div class="id-label">ID:12225</div>
								<div class="use-label">{{ useRate }} / 100
									<div :style="'width:' + useRate + '%'"></div>
								</div>
								<div class="lv-label">Lv 5</div>
							</div>
						</div>
					</swiperSlide>
					<swiperSlide class="swiperItem">124</swiperSlide>
					<swiperSlide class="swiperItem">124</swiperSlide>
				</swiper>
				<div class="reward">Reward: 10000 TMT</div>
			</div>
		</div>

		<!-- claim data -->
		<div style="height: 40px;"></div>
		<div class="data">
			<div class="data-item">
				<span class="label">Group Active</span>
				<div class="progress">
					{{ DataTransferItem.group }} / 100
					<div :style="'width:' + DataTransferItem.group + '%'">
						
					</div>
				</div>
			</div>
			<div  class="data-item">
				<span class="label">User Active</span>
				<div class="progress">
					{{ DataTransferItem.user }} / 100
					<div :style="'width:' + DataTransferItem.user + '%'">
						
					</div>
					
				</div>
			</div>
			<div  class="data-item">
				<span class="label">Nft Rate</span>
				<div class="progress">
					{{ DataTransferItem.nft }} / 100
					<div :style="'width:' + DataTransferItem.nft + '%'">
						
					</div>
				</div>
			</div>
		</div>
		<div style="display: flex;justify-content: center;margin-top: 60px;">
			<button class="claim" @click="claim">Claim</button>
		</div>
		

	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
	 import 'swiper/dist/css/swiper.css'
	export default {
		name: 'HomeIndex',
		props: {},
		components:{
			swiper,
			swiperSlide
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
				DataTransferItem:{
					group:20,
					user:30,
					nft:40
				},
				swiperOption: {
				  effect: 'coverflow',
				  grabCursor: true,
				  centeredSlides: true,
				  slidesPerView: 'auto',
				  initialSlide:1,
				  coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows : true
				  },
				},
				useRate:90,
				
			}
		},
		destroyed() {
		},
		methods: {
			claim:function(){
				this.$WebApp.showAlert('not rewards')
			},
			nftDetail:function(){
				this.$emit('nftDetail', -1)
			}
		}
	}
</script>
<style scoped >
	.home{

	}
	
	
	.nft-card{
		padding: 20px 40px;
		margin-top: 30px;
	}
	.swiper{
		width: 100%;
		height:240px;
		/* background: rgba(0, 0, 0, 0.07); */
	}
	.swiper{
		border:solid 2px rgba(0, 0, 0, 0.6);
		box-shadow: 3px 3px 1px rgba(0, 0, 0, 1);
		border-radius: 20px;
	}
	.swiperItem{
		width: 100%;
		height: 100%;
		margin: 0;
	}
	.slide-content{
		width: 90%;
		height: 220px;
		margin: 10px 5%;
		display: flex;
		/* flex-direction: column; */
		flex-wrap: wrap;
		justify-content: center;
		position: relative;
	}
	.rarity{
		position: absolute;
		top: -13px;
		left: 0;
		width: 100%;
		text-align: center;
	}
	.rarity .label{
		display: inline-block;
		padding: 5px 20px;
		background: #0088cc;
		font-weight: 600;
		border-radius: 0 0 10px 10px;
		font-size: 12px;
	}
	.nft-item{
		/* width: 60%; */
		height: 150px;
		margin-top: 20px;
		width: 200px;
	}
	.nft-atttr{
		display: flex;
		align-items: center;
		font-size: 12px;
		font-weight: 600;
		justify-content: space-around;
		width: 100%;
	}
	.id-label{
		background: rgba(0, 0, 0, 0.2);
		padding: 4px 10px;

		border-radius: 15px;
	}
	.use-label{
		border: solid 2px rgba(0, 0, 0, 0.2);
		padding: 2px 10px;
		text-align: center;
		border-radius: 15px;
		position: relative;
		z-index: 2;

	}
	.use-label div{
		position: absolute;
		top: 0px;
		left: 3px;
		height: 85%;
		background: #0088cc;
		border-radius: 15px;
		z-index: -1;
	}
	.lv-label{
		border: solid 2px rgba(0, 0, 0, 0.2);
		padding: 2px 10px;
		border-radius: 15px;
	}
	.reward{
		margin-top: 30px;

		text-align: center;
		font-weight: 600;
		font-size: 18px;
	}
	.data-item{
		font-weight: 600;
		font-size: 12px;
		margin: 0 20px 10px 20px;
		display: flex;
		align-items: center;
	
	}
	.data-item .label{
		margin-right: 10px;
		display: inline-block;
		width: 100px;
		text-align: left;
	}
	.data-item .progress{
		width: 200px;
		background: #fff;
		height: 10px;
		border-radius: 15px;
		font-size: 10px;
		text-align: right;
		position: relative;
	}
	.data-item .progress div{
		background: #0088cc;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 15px;
	}
	.data{
		padding: 20px 40px;
		background: #f5f7f7;
	}
	.claim{
		width: 150px;
		height: 45px;
		border-radius: 30px;
		border: solid 1px rgba(0, 0, 0, 0.6);
		background: #0088cc;
		color:#fff;
		font-size: 18px;
		font-weight: 600;
		box-shadow: 2px 2px 0px #000;
	}
</style>