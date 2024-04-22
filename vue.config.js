const {
	defineConfig
} = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: './',
	lintOnSave:false,
	configureWebpack: {
		plugins: [new NodePolyfillPlugin()],
	},
	devServer: {
		// open: false,
		// host: '0.0.0.0',
		// port: 8080,
		// https: false,
		// hotOnly: false,

		// proxy: {
		// 	'': {
		// 		target: 'http://pool.shukejujiao.com', // 代理目标的基础路径
		// 		// target:"http://192.168.1.9:8888",
		// 		changeOrigin: true,
		// 		pathRewrite: {
		// 			'^': ''
		// 		}
		// 	},
		// },

	}
})
