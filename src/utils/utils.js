// import {BLOCKCHAIN_LIST} from "../web3/config.js"
// import { aggregate as aggregateTool } from '@makerdao/multicall'

	
//  function getTimeByTimeStemp(time) {
// 	var date = new Date(time);  // 参数需要毫秒数，所以这里将秒数乘于 1000
// 	var Y = date.getFullYear() + '-';
// 	var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
// 	var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
// 	var h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
// 	var m = date.getMinutes() <10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
// 	var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
//   return Y+M+D+h+m+s
// }

//  function getChainInfoByName(name,BLOCKCHAIN_LIST){
// 	for (let key in BLOCKCHAIN_LIST) {
// 		if (BLOCKCHAIN_LIST[key].name.toLowerCase() == name.toLowerCase()) {
// 			return BLOCKCHAIN_LIST[key];
// 		}
// 	}
// }
//  function getShortTime(strtime,type){
// 	 let dateTimeStamp;
// 	 if(type == 0){
// 		 dateTimeStamp = new Date(strtime.replace(/-/g, '/'));
// 		  dateTimeStamp = dateTimeStamp.getTime();
// 	 }else{
// 		 dateTimeStamp = Number(strtime)* 1000;
// 	 }
	  
	 
// 	  const minute = 1000 * 60; 
	 
// 	  const hour = minute * 60;
// 	  const day = hour * 24;
// 	  const week = day * 7;
// 	  const now = new Date().getTime(); // 获取当前时间毫秒
	 
// 	  const diffValue = now - dateTimeStamp; // 时间差
	 
// 	  let result = '';
	 
// 	  if (diffValue < 0) {
// 	    return;
// 	  }
	 
// 	  const minC = diffValue / minute; // 计算时间差的分，时，天，周，月
	 
// 	  const hourC = diffValue / hour;
// 	  const dayC = diffValue / day;
// 	  const weekC = diffValue / week;
	 
// 	  if (weekC >= 1 && weekC <= 4) {
// 	    result = ` ${parseInt(weekC, 10)}周前`;
// 	  } else if (dayC >= 1 && dayC <= 6) {
// 	    result = ` ${parseInt(dayC, 10)}天前`;
// 	  } else if (hourC >= 1 && hourC <= 23) {
// 	    result = ` ${parseInt(hourC, 10)}小时前`;
// 	  } else if (minC >= 1 && minC <= 59) {
// 	    result = ` ${parseInt(minC, 10)}分钟前`;
// 	  } else if (diffValue >= 0 && diffValue <= minute) {
// 	    result = '刚刚';
// 	  } else {
// 	    const datetime = new Date();
// 	    datetime.setTime(dateTimeStamp);
// 	    const Nyear = datetime.getFullYear();
// 	    const Nmonth = datetime.getMonth() + 1 < 10 ? `0${datetime.getMonth() + 1}` : datetime.getMonth() + 1;
// 	    const Ndate = datetime.getDate() < 10 ? `0${datetime.getDate()}` : datetime.getDate();
// 	    result = `${Nyear}-${Nmonth}-${Ndate}`;
// 	  }
// 	  return result;
// }


// async function getGasInfo(web3Object,contract_name,account){
//     let info = []
//     let gas_price = await web3Object.eth.getGasPrice();
//     info[0] = Number(gas_price);
//     let transferData = contract_name;
//     let gas_limit = await web3Object.eth.estimateGas({to:account , data:transferData});
//     info[1] = Number(gas_limit) + 500000;
//     return info;
//   }

// async function checkApprove(checkcontract,spend,owner,checkAmount){
// 	let allow_num = await checkcontract.methods.allowance(owner,spend).call();
// 	console.log('allow_num',allow_num)
// 	return Number(allow_num) >= Number(checkAmount);
// }
// function sendApprove(contract,spend,owner,approveAmount){
// 	return contract.methods.approve(spend,approveAmount).send({
// 		from: owner
// 	})
// }

// function payEth(contract, account, payAmount,coinName){
// 	return contract.methods.pay(1,coinName,payAmount).send({
// 		from:account
// 	})
	
// }





// export {
// 	getTimeByTimeStemp,getChainInfoByName,getShortTime,getGasInfo,
// 	checkApprove,
// 	sendApprove,
// 	payEth
// }
// // export function getUserId() {
// //   return window.localStorage.getItem('userId')
// // }

// // export function setToken(token) {
// //   return Cookies.set(TokenKey, token)
// // }

// // export function removeToken() {
// //   return Cookies.remove(TokenKey)
// // }