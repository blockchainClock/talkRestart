// import WalletConnectProvider from '@walletconnect/web3-provider';
// import Web3Modal from 'web3modal';
// import Web3 from 'web3'
// import store from '../store/index.js'


// // let NETWORKWEB3 = {}
// // TOKENINFO.forEach(item => {
// // 	let rpc = item.rpc;
// // 	NETWORKWEB3[item.name] = new Web3(rpc);
// // })


// // var _this = this;

// const subscribeProvider = async (provider, newWeb3) => {
// 	if (!provider.on) {
// 		return;
// 	}
// 	provider.on('close', () => {
// 		sessionStorage.removeItem('myAddress');
// 		localStorage.clear();
// 		closeApp(newWeb3);
// 	});

// 	provider.on('accountsChanged', async (accounts) => {
		
// 		let address = await accounts[0];
// 		if (accounts.length > 0) {
// 			store.commit('SET_ADDRESS', address)
// 			let upperadd = address.toLowerCase();
// 			localStorage.setItem('walletAddress', upperadd);
// 		} else {
// 			store.commit('SET_ADDRESS', '')
// 			localStorage.setItem('walletAddress', '');
// 		}
// 		location.reload();

// 	});
// 	provider.on("chainChanged", async (chainId) => {
// 		// location.reload	();
// 		console.log(chainId)
// 		store.commit('setNetworkId', parseInt(chainId))
// 	});
// };

// const closeApp = async (newWeb3) => {
// 	if (newWeb3 && newWeb3.currentProvider && newWeb3.currentProvider.close) {
// 		await newWeb3.currentProvider.close();
// 	}
// 	await newWeb3.clearCachedProvider();
// };

// let providerOptions = {
// 	walletconnect: {
// 		package: WalletConnectProvider,

// 		// options: {
// 		// 	infuraId: '', //以太坊连接必填
// 		// 	rpc: {
// 		// 		97: BLOCKCHAIN_LIST[97].rpcUrl,
// 		// 	}
// 		// },
// 	},
// };


// const getWeb = async (rpcdata) => {
// 	if(store.state.walletAddress != ''){
// 		return;
// 	}
// 	const web3Modal = new Web3Modal({
// 		network: '',
// 		cacheProvider: false,
// 		providerOptions,
// 	});
// 	const provider = await web3Modal.connect();
	
// 	if (rpcdata && rpcdata != '') {
// 		switchNetwork(provider, rpcdata.chainId, )
// 	}
// 	const newWeb3 = new Web3(provider);
// 	await web3Modal.toggleModal();
// 	await subscribeProvider(provider, newWeb3);
// 	var accountsl = await newWeb3.eth.getAccounts();
// 	store.commit('SET_Web3', newWeb3)
// 	window.web3 = newWeb3;
// 	store.commit("SET_ADDRESS", accountsl[0]);
// 	let upperadd = accountsl[0].toLowerCase();
// 	localStorage.setItem('walletAddress', upperadd);
// 	return newWeb3;
// };


// async function switchNetwork(walletProvider, chainId) {
// 	console.log(chainId.toString(16))
// 	try {
// 		await walletProvider.request({
// 			method: "wallet_switchEthereumChain",
// 			params: [{
// 				chainId: '0x' + chainId.toString(16)
// 			}],
// 		});
		
// 	} catch (error) {
// 		console.log(error)
// 	}
// }


// export {
// 	getWeb,
// 	// BLOCKCHAIN_LIST,
// 	// TOKENINFO,
// 	// NETWORKWEB3
// };
