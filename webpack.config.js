const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const outputFile = 'senna';
const env = process.env.WEBPACK_ENV;

// // if (env === 'build') {
// //   plugins.push(new UglifyJsPlugin({ minimize: true }));
// //   outputFile = outputFile + '.min.js';
// // } else {
// //   outputFile = outputFile + '.js';
// // }

const config = {
  target: 'node',

  devtool: 'source-map',

  module: {
    rules:[{
      test: /\.js/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      loader: "babel-loader",
      options: { presets: ['@babel/preset-env'] },
    }],
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

}

const amd = {
  entry: './src/senna.js',
  output: {
    filename: 'build/amd/' + outputFile + '.js',
    libraryTarget: 'amd',
    library: outputFile,
  },
  ... config,
};

const cjs = {
  entry: './src/senna.js',
  output: {
    filename: 'build/cjs/' + outputFile + '.js',
    libraryTarget: 'commonjs',
    library: outputFile,
  },
  ... config,
};

const global = {
  entry: './src/senna.js',
  output: {
    filename: 'build/global/' + outputFile + '.js',
    libraryTarget: 'global',
    library: outputFile,
  },
  ... config,
};

plugins: [
  new UglifyJsPlugin({
    include: './build/*',
    compress: {
      unused: true,
      warnings: false,
      drop_console: false
    }
  }),
  // new CompressionPlugin({
  //   path.resolve(__dirname, )
  // })
]

module.exports = [amd, cjs, global];