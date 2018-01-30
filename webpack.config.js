const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const injectConfig = new HtmlWebpackPlugin({
	template: path.resolve(__dirname, 'app/index.htm'),
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
		publicPath: 'http://localhost:8080/',
		compress: true,
		historyApiFallback: true,
		hot: true
	},
	resolve: {
		modules: ['app', 'node_modules'],
		extensions: ['.jsx', '.js', '.json', '.png']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true
						}
					}
				]
			}
		]
	},
	plugins: [injectConfig]
};
