const Express = require('express');
const webpack = require('webpack');
const webpacDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const createWebpackConfig = require('./webpack.config');

const webpackConfig = createWebpackConfig({ env: 'development' });
const webpackCompiler = webpack(webpackConfig);

const devMiddleware = webpacDevMiddleware(webpackCompiler, {
  // noInfo: false,
  publicPath: '/',
});
const hotMiddleware = webpackHotMiddleware(webpackCompiler);


const app = new Express();

app.use(devMiddleware);
app.use(hotMiddleware);

app.listen(8080, () => {
  console.log("Listening on 8080");
});
