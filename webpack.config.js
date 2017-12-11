const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const DashboardPlugin = require('webpack-dashboard/plugin');
const outputFile = 'senna';
const env = process.env.WEBPACK_ENV;

// if (env === 'build') {
//   plugins.push(new UglifyJsPlugin({ minimize: true }));
//   outputFile = outputFile + '.min.js';
// } else {
//   outputFile = outputFile + '.js';
// }

const config = {
  entry: __dirname + '/src/senna.js',

  devtool: 'source-map',

  output: {
    //só globals here
    path: path.resolve(__dirname, '/build/webpack'),
    filename: outputFile,
    library: outputFile,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {
    loaders: [
      {
        test: /(\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|lib)/
      },
    ]
  },

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },

  plugins: [
    new ProgressBarPlugin(),
    new DashboardPlugin({ port: 3001 }),
    new CompressionPlugin({
      test: /\.js/|/\.css/,
      algorithm: 'gzip',
      include: outputFile,
    }),
  ],

  extensions: ['', '.js', '.css'],
};


module.exports = config;

module.exports = [{
  output: {
    filename: 'build/amdWebpack/' + outputFile + '.js',
    libraryTarget: 'amd'
  },
  entry: './src/senna.js',
}, {
  output: {
    filename: 'build/cjsWebpack/' + outputFile + '.js',
    libraryTarget: 'commonjs'
  },
  entry: './src/senna.js',
}]