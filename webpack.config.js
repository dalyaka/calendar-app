const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

function createAppEntry({ env }) {
  if (env === 'development') {
    return [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      './src/index.js',
    ];
  }

  return ['./src/index.js'];
}

function createHotPlugins({ env }) {
  if (env === 'development') {
    return [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ];
  }

  return [];
}

function createJsLoader() {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      babelrc: false,
      presets: [
        'es2015',
        'react'
      ]
    }
  }
}

module.exports = function createWebpackConfig({ env = 'development' } = {}) {
  return {
    devtool: env === 'development' ? 'source-map' : false,
    entry: {
      app: createAppEntry({ env }),
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: '[name].js',
      publicPath: '/',
    },
    module: {
      rules: [
        createJsLoader(),
      ],
    },
    plugins: [
      ...createHotPlugins({ env }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html.js',
        inject: false,
        minify: env === 'production'
            ? { collapseWhitespace: true, preserveLineBreaks: true }
            : false,
      }),
    ]
  };
}
