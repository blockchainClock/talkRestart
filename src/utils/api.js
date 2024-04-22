
import {requestGet,requestPost} from "./requests.js";

// 签名消息
export function getSignMessage(address){	
	let params = {Address:address};
	return requestGet('getSignMsg',params);
}

// 签名登陆
export function loginBySign(address,signature){
		let params = {Address:address,Signature: signature};
		return requestGet('login',params);
		
}

 
export function userInfo(){
	return requestGet('user',{});
}

//游戏排名
export function gameRank(type,id){
	return requestGet('score', {Type:type, GameId})
}
//游戏配置
export function gameConfig(){
	return requestGet('gameConfig',{})
}
//收益列表
export function profitList(id, gameid){
	return requestGet('profitList',{UserId:id, GameId: gameid})
}
//提现
export function getClaimSign(amount){
	return requestGet('drawCoinSign', {amount: amount})
}
//领取
export function claimReward(ID, gameid){
	return requestGet('claimProfit', {ID: ID,GameId:gameid })
}
//首页宝箱数据
export function rewardPoolData(gameid){
	return requestGet('indexRewardInfo', {GameId:gameid})
}
//所有期数名称
export function termList(gameid){
	return requestGet('termList', {GameId:gameid})
}
//期数排名
export function termDetailList(id, type, gameid, userId){
	let params = {TermId: id, Type: type,GameId:gameid}
	if(userId > 0){
		params['UserId'] = userId
	}
	return requestGet('termDetailList', params)
}

//rule
export function gameRuleNotice(id){
	return requestGet('gameRuleNotice', {GameId:id})
}


