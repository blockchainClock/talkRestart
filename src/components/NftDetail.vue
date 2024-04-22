<template>
	<div>
	
		<div class="nft-detail">
			<!-- user balance and user info -->
			

			<!-- usernfy -->
			<div class="user-nft">
				<div class="nft-card">
					<div class="slide-content">
						
						<img class="nft-item" src="../assets/cat2.png" />
						<div class="nft-atttr">
							<div class="id-label">ID:12225</div>
							<div class="rarity"><span class="label">Common</span></div>
							<div class="use-label">{{ useRate }} / 100
								<div :style="'width:' + useRate + '%'"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="lv">
				<div class="lv-label">Level {{ lv }}
					<div :style="'width:' + (lv * 100 / 30) + '%'"></div>
				</div>
				<img @click="upLevel" class="level-icon" src="../assets/level.png" />
			</div>
			<div class="stake-btn" style="text-align: center;margin-top:20px;">
				<button>Repair</button>
				<button @click="openGroup(1)">Stake</button>
			</div>
			<div style="font-size: 18px;font-weight: 600;padding: 60px 0 0 30px">Attributes</div>
			<div class="data">
				<div class="data-item">
					<span class="label">Efficiency</span>
					<div class="progress">
						
						<div :style="'width:' + DataTransferItem.group + '%'">
							
						</div>
					</div>
					<div>{{ DataTransferItem.group }}</div>
					<div class="add">+</div>
				</div>
				<div  class="data-item">
					<span class="label">Luck</span>
					<div class="progress">
						
						<div :style="'width:' + DataTransferItem.user + '%'"></div>
						
					</div>
					<div>{{ DataTransferItem.user }}</div>
					<div class="add">+</div>
				</div>
				
			</div>
			
		</div>

		<div class="sell-btn" style="text-align: center;margin-top:20px;">
			<button style="background: #fff;color: #000;">Sell</button>
			<button style="background: #0088cc;color: #000;">Transfer</button>
		</div>
		<div style="height: 30px;"></div>
		<div class="select-group" v-if="mask==1" >
			<div class="mask-content" :class="mask == 1 ? 'mask-open' : ''">
				<div style="text-align: center;font-size: 18px;margin-bottom: 20px;">Group List</div>
				<div class="close" @click="openGroup(0)"><img src="../assets/close.png" /></div>
				<div v-for="(item,index) in groupList">
					<div class="group-item">
						<span>{{ item.name }}</span>
						<button @click="stake(index)" v-clipboard:copy="message">Stake</button>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NftDetail',
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
				mask:0,
				DataTransferItem:{
					group:20,
					user:30,
					nft:40
				},
				lv:7,
				message:'testcopy',
				useRate:90,
				groupList:[
					{
						name:'group1',
						url: 'https://t.me/botherr_vf'
					},
					{
						name:'group1',
						url: 'https://t.me/Cattbot'
					},{
						name:'group1',
						url: 'https://t.me/botherr_vf'
					},{
						name:'group1',
						url: 'https://t.me/botherr_vf'
					},{
						name:'group1',
						url: 'https://t.me/botherr_vf'
					}
				]
				
			}
		},
		destroyed() {
		},
		methods: {
			claim:function(){
				this.$WebApp.showAlert('not rewards')
			},
			upLevel:function(){
				let _this = this;
				this.$WebApp.showPopup({
					title: 'Level Up',
					message: 'Level up to Lv' + (_this.lv + 1) + ' need 5 TMT ',
					buttons: [
						{type: 'cancel'},
						{id: 'confirm', type: 'default', text: 'Confirm'},
					]
				}, function(btn) {
					if (btn === 'confirm') {
						_this.lv += 1
					}
				});
			},
			stake:function(index){
				let url = this.groupList[index].url;
				let _this = this;
				this.$WebApp.showPopup({
					title: 'Stake',
					message: ' Keys copied successfully, Send it to group and you can get rewards',
					buttons: [
						{type: 'cancel'},
						{id: 'confirm', type: 'default', text: 'Confirm'},
					]
				}, function(btn) {
					if (btn === 'confirm') {
						_this.$WebApp.openTelegramLink(url);
					}
				});
				// 
			},
			
			openGroup(index){
				this.mask = index;
			}
		}
	}
</script>
<style scoped >
	.home{

	}
	
	
	.slide-content{
		height:240px;
		margin: 10px 5%;
		display: flex;
		/* flex-direction: column; */
		flex-wrap: wrap;
		justify-content: center;
		position: relative;
	}
	.rarity{
		
		text-align: center;
	}
	.rarity .label{
		display: inline-block;
		padding: 2px 10px;
		border: solid 2px rgba(0, 0, 0, 0.5);
		background: #fff;
		font-weight: 600;
		border-radius: 20px;
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
	.lv{
		display: flex;
		padding: 0 40px;
		align-items: center;

	}
	.lv-label{
		border: solid 2px rgba(0, 0, 0, 0.2);
		padding: 2px 10px;
		border-radius: 15px;
		width: 70%;
		font-weight: 600;
		font-size: 12px;
		background: #fff;
		position: relative;
		z-index: 1;
	}
	.lv-label div{
		position: absolute;
		height: 100%;
		background: #0088cc;
		left: 0;
		border-radius: 15px;
		top: 0;
		z-index: -1;
	}
	.data-item{
		font-weight: 600;
		font-size: 12px;
		margin: 0 20px 20px 20px;
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
		padding: 15px 40px;
		background: #f5f7f7;
	}

	.nft-detail{
		width: 90%;
		border: solid 2px rgba(0, 0, 0, 0.8);
		border-radius: 20px;
		margin-left: 5%;
		margin-top: 20px;
		overflow: hidden;
	}
	.add{
		color: #0088cc;
		font-size: 16px;
		border: solid 1px #0088cc;
		width: 16px;
		height: 16px;
		line-height: 16px;
		position: absolute;
		right: 50px;
		text-align: center;
		border-radius: 50%;
		font-weight: 500;
	}
	.level-icon{
		/* border: solid 2px #0088cc; */
		width: 20px;
		height: 20px;
		padding:0 10px;
		border-radius: 50%;
		margin-left: 10px;
	}
	.stake-btn button{
		border: none;
		height: 35px;
		width: 100px;
		margin: 0 15px;
		border-radius: 30px;
		font-size: 14px;
		color:#0088cc ;
		font-weight: 600;
		font-family: 'gamefont';
	}
	.sell-btn button{
		border: none;
		height: 45px;
		width: 130px;
		margin: 0 15px;
		border-radius: 30px;
		font-size: 16px;
		border: solid 2px #000;
		font-weight: 600;
		font-family: 'gamefont';
	}
	.select-group{
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 9;
		background: rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.mask-content{
		background: #fff;
		width: 70%;
		padding: 20px;
		border-radius: 20px;
		font-weight: 600;
		position: relative;
	}
	.mask-content .close{
		width: 20px;
		height: 20px;
		background: rgba(0, 0, 0, 0.2);
		border-radius: 50%;
		padding: 5px;
		text-align: center;
		line-height: 25px;
		position: absolute;
		right: 10px;
		top: 10px;
	}
	
	.mask-content .close img{
		width: 20px;
		height: 20px;
	}
	.group-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		font-size: 14px;
		line-height: 40px;
		border-bottom: solid 1px rgba(0, 0, 0, 0.1);
	}
	.group-item button{
		line-height: 25px;
		height: 25px;
	}
</style>