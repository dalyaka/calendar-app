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
        'react',
        'stage-0'
      ]
    }
  }
}

function createCssLoader() {
  return {
    test: /\.css$/,
    exclude: /node_modules/,
    loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
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
        createCssLoader(),
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
