const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/js/main.jsx',
    // vendor: ['d3'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', '../app/vendor.bundle.js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new webpack.NoErrorsPlugin(),
  ],
  output: {
    path: __dirname,
    filename: '../app/bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
