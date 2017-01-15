const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const extendConfig = require('./webpack.shared');


module.exports = extendConfig(config => ({
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../src/js/main.jsx')
  ],
  plugins: [...config.plugins,
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      ...config.module.loaders.filter(loader => loader.loader !== 'babel-loader'),
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: path.join(__dirname, '../node_modules/')
      }
    ]
  },
  devServer: {
    contentBase: 'build',
    quiet: false,
    noInfo: false,
    stats: {
      assets: false,
      colors: true,
      chunkModules: false
    }
  }
}
), true);
