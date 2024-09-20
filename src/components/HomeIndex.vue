<template>
	<div class='page'>
		<div class="vadio-bg">
			<div style='position:relative;'>
				<video class="vadio" muted  autoplay="autoplay" preload="auto" loop >
					<source src="../assets/bg.mp4" />
				</video>
				<img style='position:relative;width:100%;z-index:888;height:177px;bottom:70px; ' src="../assets/bg2.png" />
			</div>
			
			<div class="content flex-item-center">
				<div class="width-96 flex-between" >
					<img style="width:214px"  src="../assets/logo.png"/>
					<div class="flex-center" style="color: #fff;">
						<div>DOC</div>
						<img @click="openUrl" style="width:58px;height:58px;margin-right:10px;margin-left:60px;" src="../assets/twitter.png" />
						<button class="connect-wallet">CONNECT WALLET</button>
					</div>
				</div>
				<div class="width-96" style='margin-top:60px;'>
					<div class="slogo wow animate__bounce">Socialfi & Gamingfi </div>
					<div class="slogo2 ">WILL BE A DOUBLE BOOSTER FOR YOU ASSET GROWTH!</div>
					<div class='flex-center' style='justify-content:flex-start;margin-top:100px;'>
						<button class='download flex-item-center'>
							<img src='../assets/download.png' />
							<span>Download</span>
						</button>
						<img class="platform" src="../assets/android.png" />
						<img class="platform" src="../assets/sanxing.png" />
						<img class="platform" src="../assets/apple.png" />
					</div>
				</div>
				
			</div>
		</div>
		
		
		<div class='chain-list'>
			<div class='chain-swiper'>
				<swiper ref="swiper2" :options="swiperOptionChainList" class="show-swiper">
					<swiper-slide :key="index" v-for="(item, index) in chainLis">
						<div class="swiper-item flex-item-center">
							<!-- <span>{{ item.name }}</span> -->
							<img :src="item.logo"/>
						</div>
					</swiper-slide>
				</swiper>
			</div>
			<div style='position:relative;'>
				<img src="../assets/attr-bg.png" style="width: 100%" />
				<div class='attr-head flex-item-center'>Getting Started with Kechat App</div>
			</div>
			
			<div class="swiper-content flex-item-center">
				<!-- <swiper ref="mySwiper" :options="swiperOption" class="show-swiper">
					<swiper-slide>
						<div class="swiper-item kechatbg">
							<img src="../assets/attr1.png"/>
							<div class='attr-content'>
								<div class='attr-title'>social power</div>
								<div class='attr-text'>Enhance your “social power” by being socially active.</div>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="swiper-item kechatbg">
							<img src="../assets/attr2.png"/>
							<div class='attr-content'>
								<div class='attr-title'>Web3 wallet</div>
								<div class='attr-text'>Embedded Web3 multi-chain wallet to support asset management and transactions across different blockchain networks.</div>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="swiper-item kechatbg">
							<img src="../assets/attr3.png"/>
							<div class='attr-content'>
								<div class='attr-title'>Popular Games</div>
								<div class='attr-text'>Integrate popular Web3 games, allowing users to quickly launch games and manage game settings.</div>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="swiper-item kechatbg">
							<img src="../assets/attr4.png"/>
							<div class='attr-content'>
								<div class='attr-title'>Exclusive social</div>
								<div  class='attr-text'>Associate users' game assets with their social accounts to create exclusive asset-based social group chats.</div>
							</div>
						</div>
					</swiper-slide>
				</swiper> -->
			
				<div class=" show-swiper">
					<div class="wow animate__flipInX">
						<div class="swiper-item kechatbg">
							<img src="../assets/attr1.png"/>
							<div class='attr-content'>
								<div class='attr-title'>social power</div>
								<div class='attr-text'>Enhance your “social power” by being socially active.</div>
							</div>
						</div>
					</div>
					<div class="wow animate__flipInX">
						<div class="swiper-item kechatbg">
							<img src="../assets/attr2.png"/>
							<div class='attr-content'>
								<div class='attr-title'>Web3 wallet</div>
								<div class='attr-text'>Embedded Web3 multi-chain wallet to support asset management and transactions across different blockchain networks.</div>
							</div>
						</div>
					</div>
					<div class="wow animate__flipInX">
						<div class="swiper-item kechatbg ">
							<img src="../assets/attr3.png"/>
							<div class='attr-content'>
								<div class='attr-title'>Popular Games</div>
								<div class='attr-text'>Integrate popular Web3 games, allowing users to quickly launch games and manage game settings.</div>
							</div>
						</div>
					</div>
					<div class="wow animate__flipInX">
						<div class="swiper-item kechatbg ">
							<img src="../assets/attr4.png"/>
							<div class='attr-content'>
								<div class='attr-title'>Exclusive social</div>
								<div  class='attr-text'>Associate users' game assets with their social accounts to create exclusive asset-based social group chats.</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>

		</div>
		
	</div>
</template>

<script>
	
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import 'swiper/dist/css/swiper.css';
	import { WOW } from 'wowjs'
	export default {
		name: 'HomeIndex',
		components:{
			swiper,
			swiperSlide
		},
		computed: {
		  swiper() {
		   return this.$refs.mySwiper.swiper
		  },
		},
		data(){
			return{
				chainLis:[
					{
						name:'Ethereum',
						logo: require('../assets/chainicon1.png')
					},
					{
						name:'Ethereum',
						logo: require('../assets/chainicon2.png')
					},
					{
						name:'Ethereum',
						logo: require('../assets/chainicon3.png')
					},
					{
						name:'Ethereum',
						logo: require('../assets/chainicon4.png')
					},
					{
						name:'Ethereum',
						logo: require('../assets/chainicon5.png')
					},
					{
						name:'Ethereum',
						logo: require('../assets/chainicon6.png')
					},
					{
						name:'Ethereum',
						logo: require('../assets/chainicon7.png')
					},
					{
						name:'Ethereum',
						logo: require('../assets/chainicon1.png')
					}
				],
				list:[1,2,3,4],
				swiperOptionChainList: {
					 slidesPerView: 4,
					 spaceBetween: 30,
					 speed:6000,
					autoplay: { // 自动播放
					    delay: 0, //【关键】自动切换的时间间隔，单位ms
					},
				},
				activeItemIndex:1,
				 swiperOption: {
					 initialSlide:1,
					 direction: 'vertical',
				    // 设置slider容器能够同时显示的slides数量，默认为1， 'auto'则自动根据slides的宽度来设定数量
				    slidesPerView: 'auto',
				    /*
				    * 开启这个参数来计算每个slide的progress(进度、进程)
				    * 对于slide的progress属性，活动的那个为0，其他的依次减1
				    */
				    watchSlidesProgress: true,
				    // 默认active slide居左，设置为true后居中
				    centeredSlides: true,
				    // 当你创建一个Swiper实例时是否立即初始化，这里我们手动初始化
				    init: false,
				    on: {
						 progress: function() {
							for (let i = 0; i < this.slides.length; i++) {
								 const slide = this.slides.eq(i)
								 const slideProgress = this.slides[i].progress
						   
								 const scale = 1 - Math.abs(slideProgress) / 5 // 缩放权重值，随着progress由中向两边依次递减，可自行调整
								 slide.transform(`scale3d(${scale}, ${scale}, 1)`)
							}
						 },
				     
				    }
				   }
			}
		},
		mounted() {
			var wow = new WOW({
			      boxClass: 'wow', // animated element css class (default is wow)
			      animateClass: 'animate__animated', // optional scroll container selector, otherwise use window
				  offset: 0, // 设置为 0，使得动画在元素进入视口时就触发
				    mobile: false, // 是否在移动设备上激活动画（可选）
				    live: true // 在页面加载后动态添加的元素上也使用动画（可选）
			    })
			    wow.init()
		  // this.initSwiper()
		},
		methods: {
		  initSwiper() {
			   this.$nextTick(async() => {
				await this.swiper.init() // 现在才初始化
				await this.swiper.slideTo(this.activeItemIndex)
			   })
		  },
		  openUrl(){
			  window.open('https://x.com/kechatglobal?s=11')
		  }
		}
	}
</script>

<style scoped>
	@import "https://debox.pro/_next/static/css/f5135d12d375ccbe.css";
	
	@font-face {
	  font-family: slideyouran;
	  src: url("../assets/MiSans-Medium.ttf");
	}
	.page{
		width: 100%;
		/* height:100%; */
		/* overflow:scroll; */
		background:#000;
		font-family:slideyouran ;
		min-width: 1300px;
	}
	.flex-center{
		display: flex;
		align-items: center;
	}
	.flex-item-center{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.flex-between{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.width-96{
		width: 1300px;
	}
	.vadio-bg{
		
			position: relative;
			
	}
	.vadio{
		width: 100%;
		margin-top:86px;
		
	}
	.content{
		position: absolute;
		top:0;
		left:0;
		width: 100%;
		top:55px;
		flex-direction: column;
	}
	.connect-wallet{
		border: none;
		background: #FFEC1C;
		color: #000;
		width: 15.125rem;
		height: 3.625rem;
		border-radius: 40px;
		padding: 0;
		font-weight: 600;
	}
	.slogo{
		font-weight: 800;
		font-size: 4.3rem;
		color: #FFEC1C;
		line-height: 79px;
		text-shadow: 0px 0px 17px rgba(255,251,1,0.15), 0px 0px 10px #BDBC50;
		
		text-transform: none;
		/* background: linear-gradient(71.98727387165259deg, #FFFB01 22%, #7EFF21 100%); */
	}
	.slogo2{
		font-weight: 800;
		font-size: 52px;
		color: #FFFFFF;
		text-shadow: 0px 0px 17px rgba(255,255,255,0.28), 0px 0px 10px rgba(255,252,66,0.59);
	}
	.swiper-content {
	 width: 100%;
	 position: relative;
	 overflow: hidden;
	 margin: 0 auto;
	 padding: 50px 0;
	 
	}
	.swiper-content .show-swiper {
	 width: 1100px;
	 top: 0;
	 left: 0;
	
	
	}
	.kechatbg{
		position:relative;
	}
	.kechatbg img{
		width:100%;
	}
	.swiper-content .swiper-slide {
	 width: 100%;
	 /* transition: all .4s cubic-bezier(.4, 0, .2, 1); */
	}
	.swiper-content .swiper-item {
	 width: 100%;
	 /* height: 200px; */
	 /* background: rgb(140, 172, 134); */
	 border-radius: 6px;
	 color: #fff;
	 font-size: 24px;
	 margin-bottom: 25px;
	 line-height: 1.5;
	 /* border: 1px solid orangered; */
	}
	.chain-list{
		margin-bottom:37px;
	}
	.chain-swiper img{
		width: 300px;
		color:#fff;
		text-align:center;
		/* height:40px; */
	}
	.attr-content{
		position:absolute;
		top:0;
		left:0;
		width: 650px;
		height:250px;
		display:flex;
		padding:0 76px;
		flex-direction: column;
		justify-content: center;
	}
	.attr-title{
		font-weight: bold;
		font-size: 45px;
	}
	.attr-head{
		position:absolute;
		top:0;
		left:0;
		text-align:center;
		width:100%;
		color:#fff;
		height:100%;
		font-weight: 800;
		font-size: 52px;
		text-shadow: 0px 0px 17px rgba(255,255,255,0.28), 0px 0px 10px rgba(255,252,66,0.59);
		font-style: normal;
		text-transform: none;
	}
	.download{
		width: 216px;
		height: 64px;
		background: #FFEC1C;
		color:#000;
		border-radius: 103px 103px 103px 103px;
		font-weight: bold;
		font-size: 24px;
		margin-right:10px;
	}
	.attr-text{
		font-size:24px;
		font-weight:200;
		color: rgba(255,255,255,0.7);
	}
	.download img{
		width:27px;
		height:27px;
		margin-right:10px;
	}
	.platform{
		width:64px;
		height:64px;
		margin: 0 10px;
	}
</style>