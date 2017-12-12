var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const injectConfig = new HtmlWebpackPlugin({
	template: path.resolve(__dirname, 'app/index.htm'),
	filename: 'index.htm',
	inject: 'body'
});

module.exports = {
	context: path.resolve(__dirname),
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'bundles'),
		filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		port: 8080,
		contentBase: './bundles/'
	},
	resolve: {
		modules: ['app', 'node_modules'],
		extensions: ['.jsx', '.js', '.json']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react']
				}
			}
		]
	},
	plugins: [injectConfig]
};
