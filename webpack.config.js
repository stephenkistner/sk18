// webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const injectConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var path = require("path");
module.exports = {
  //context: __dirname + '/app',
  //entry: './index.js',
  entry: {
    app: ["./app/app.js"]
  },
  output: {
    //path: __dirname + '/build',
    path: path.resolve(__dirname, "prod"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ }
    ]
  },
  plugins: [injectConfig],
  devServer: {
    host: "0.0.0.0"
  }
}
