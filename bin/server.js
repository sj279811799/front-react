const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack/webpack.dev.config');
const webpack = require('webpack');
const path = require('path');

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  inline: true, // 自动刷新
  hot: true, // 开启热模块替换
  contentBase: path.resolve(__dirname, '../dist'), // 默认会以根文件夹提供本地服务器，这里指定文件夹
  historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
  port: 9001, // 如果省略，默认8080
  publicPath: '/',
  open: true,
  // proxy: [{
  //   context: ['**', '!/', '!/dis/**'],
  //   target: 'http://localhost:8080',
  //   changeOrigin: true,
  //   secure: false,
  //   autoRewrite: true,
  // }],
});

server.listen(9001, 'localhost', (err) => {
  if (err) throw err;
});
