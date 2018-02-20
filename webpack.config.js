const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const injectApp = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'client/index.htm'),
  inject: 'body'
});

module.exports = {
  context: path.resolve(__dirname),
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: 'bundle.js'
  },
  devtool: 'inline-cheap-source-map',
  devServer: {
    publicPath: 'http://localhost:8080/',
    compress: true,
    historyApiFallback: true,
    hot: true
  },
  resolve: {
    modules: [path.resolve(__dirname, 'client'), 'node_modules'],
    extensions: ['.jsx', '.js', '.json', '.png', '.jpg', '.jpeg', 'pdf']
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: true
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
      },
      {
        test: /\.(pdf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  plugins: [injectApp]
};
