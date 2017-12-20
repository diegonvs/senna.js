const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const outputFile = 'senna';
const env = process.env.WEBPACK_ENV;
const babel = require('babel-core');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const babelDeps = require('babel-deps');

// // if (env === 'build') {
// //   plugins.push(new UglifyJsPlugin({ minimize: true }));
// //   outputFile = outputFile + '.min.js';
// // } else {
// //   outputFile = outputFile + '.js';
// // }


const config = {
  target: 'node',

  devtool: 'source-map',

  devServer: {
    hot: true,
    contentBase: '/build/',
    publicPath: '/build/'
  },

  module: {
    rules:[
      {
        test: /\.js/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: "babel-loader",
        options: { presets: ['@babel/preset-env'] },
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'css_loader',
          options: {
            modules: true,
            minimize: true || {},
            sourceMap: true,
          }
        }]
      }
    ],
  },

  resolve: {
    modules: ["node_modules", path.resolve(__dirname, outputFile)],
  },

  performance: {
    hints: "warning",
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: outputFile,
    //   filename: './build/' + outputFile + '.min.js',
    // }),
    new UglifyJsPlugin({
      test: /\.js/,
      minify: true,
      include: './build/',
      parallel: true,
      minimize: true,
      sourceMap: true,
      uglifyOptions: {
        compress: {
          unused: true,
          warnings: false,
          drop_console: false
        },
        output: {
          safari10: true,
          webkit: true,
        },
      },
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new BundleAnalyzerPlugin()
  ]

}

const debug = {

}

const global = {
  entry: './src/senna.js',
  output: {
    filename: 'build/globals/' + outputFile + '.js',
    libraryTarget: 'global',
    library: outputFile,
  },
  ... config,
};
module.exports = [global, test];