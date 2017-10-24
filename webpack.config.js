// webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const injectConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var path = require("path");
module.exports = {
  entry: {
    app: ["./app/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "prod"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
      {
       test: /\.(jpg|jpeg|gif|png|svg)$/,
       exclude: /node_modules/,
       loader: "file-loader?name=assets/[name].[ext]"
     },
     { test: /\.(ttf|otf|eot|svg|woff|woff2?)$/,
       exclude: /node_modules/,
      loader: 'file-loader?name=assets/fonts/[name].[ext]' }
    ]
  },
  plugins: [injectConfig],
  devServer: {
    host: "0.0.0.0"
  }
}
