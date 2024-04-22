<template>
	<div class="user-nft">
		<div class="nft-tab">
			<div :class="tabindex == 0 ? 'active' : ''" @click="selectTYPE(0)" >Cats</div>
			<div :class="tabindex == 1 ? 'active' : ''" @click="selectTYPE(1)">Potions</div>
		</div>
		<div style="height: 10px;"></div>
		<div class="list" v-if="tabindex==0">
			<div class="list-item" v-for="(item, index) in catList" @click="nftDetail" >
				<div class="item-type" >{{ typeData[item.type]}}</div>
				<img class="item-img" :src="item.img" />
				<div class="item-attr">
					<span>id:{{ item.id }}</span>
					<span>lv:{{ item.lv }}</span>
				</div>

				<div class="buy">
					<span class="price">{{ item.price }} Ton</span>
					<button class="buybtn" @click="buy('cat')">Buy</button>
				</div>
			</div>
		</div>
		<div class="list" v-if="tabindex==1">
			<div class="list-item" v-for="(item, index) in waterList">
				<div class="item-type" >{{ item.type == 0 ? 'effi': 'luck' }}</div>
				<img class="item-img" :src="item.img" />
				<div class="item-attr">
					<span>id:{{ item.id }}</span>
					<span>+{{ item.amount }} %</span>
				</div>
				<div class="buy">
					<span class="price">{{ item.price }} Ton</span>
					<button class="buybtn" @click="buy('water')">Buy</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'NftMarket',
		props: {},
		components:{
		},
		
		async mounted() {
			
		},
		data() {
			return {
				tabindex:0,
				typeData:['Common','Uncommon', 'Rate', 'Epic'],
				waterList:[
					{
						type:0,
						id:124566,
						img:require('../assets/water.png'),
						amount:10,
						price:12
					},{
						type:0,
						id:124566,
						img:require('../assets/water.png'),
						amount:10,
						price:12
					},{
						type:1,
						id:124566,
						img:require('../assets/water2.png'),
						amount:10,
						price:12
					},{
						type:1,
						id:124566,
						img:require('../assets/water2.png'),
						amount:10,
						price:12
					}
				],
				catList:[
					{
						type:0,
						id:124566,
						img:require('../assets/cat1.png') ,
						lv: 3,
						price:12
					},
					{
						type:1,
						id:221356,
						img:require('../assets/cat2.png'),
						lv: 3,
						price:12
					},
					{
						type:2,
						id:122223,
						img:require('../assets/cat3.png'),
						lv: 3,
						price:12
					},{
						type:3,
						id:345222,
						img:require('../assets/cat1.png'),
						lv: 3,
						price:12
					}
				]
				
			}
		},
		destroyed() {
		},
		methods: {
			selectTYPE:function(index){
				this.tabindex = index;
			},
			nftDetail:function(){
				this.$emit('nftDetail', -1)
			},
			buy:function(type){
				let _this = this;
				if(type == 'cat'){
					this.$WebApp.showPopup({
					title: 'Buy Cat',
					message: 'Cost 10 Ton',
					buttons: [
						{type: 'cancel'},
						{id: 'confirm', type: 'default', text: 'Confirm'},
					]
				}, function(btn) {
					
				});
				}else{

				}
			}
		}
	}
</script>
<style scoped>
	.nft-tab{
		width: 60%;
		height: 40px;
		display: flex;
		align-items: center;
		line-height: 40px;
		border-radius: 40px;
		overflow: hidden;
		margin-left: 20%;
		border: solid 2px #000;
		margin-top: 30px;
		font-size: 14px;
		font-weight: 600;
		margin-bottom: 20px;
	}
	.nft-tab div{
		width: 50%;
		text-align: center;
	}
	.nft-tab .active{
		border-radius: 40px;
		background: #0088cc;
		border-right: solid 2px #000;
		box-shadow: 2px 2px 0 #000;
	}
	.list{
		padding: 0 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.list-item{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 0 20px 0;
		font-weight: 600;
		font-size: 14px;
		border: solid 2px rgba(0, 0, 0, 0.7);
		box-shadow: 2px 2px 0 #000;
		border-radius: 20px;
		width: 40%;
		height: 210px;
		position: relative;
		overflow: hidden;
	}
	.item-img{
		width: 60%;
		margin-top: 0px;
	}
	.item-type{
		background: rgba(0,0,0,0.2);
		position: absolute;
		top: 0;
		font-size: 12px;
		line-height: 25px;
		padding: 0 10px;
		border-radius: 0 0 10px 10px;
	}
	.item-attr{
		display: flex;
		justify-content: space-between;
		width: 75%;
		position: relative;
		margin-top: 10px;
		font-size: 12px;
		color: #0088cc;
	}
	.buy{
		width: 100%;
		height: 38px;
		background: rgba(0,0,0,0.1);
		position: absolute;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;

	}
	 .buy .price{
		margin-left: 10px;
		font-size: 13px;
	}
	.buy .buybtn{
		background: #0088cc;
		border: solid 1px #000;
		color: #000;
		border-radius: 20px;
		line-height: 25px;
		font-weight: 600;
		margin-right: 10px;
		box-shadow: 2px 2px 0 #000;
	}
</style>