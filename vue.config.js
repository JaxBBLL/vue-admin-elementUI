const path = require('path');
const PORT = 9002;
// const PROXY_SERVER = '';

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-admin-elementUI/' : '/',
  lintOnSave: true,
  chainWebpack: config => {
    config.showEslintErrorsInOverlay = true;
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@views', resolve('src/views'))
      .set('@api', resolve('src/api'))
      .set('@utils', resolve('src/utils'))
      .set('@common', resolve('src/common'))
      .set('@style', resolve('src/assets/style'))
      .set('@images', resolve('src/assets/images'));
  },
  productionSourceMap: false, // 生产打包时不输出map文件，增加打包速度
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
        'console.log'
      ];
    }
  },
  pluginOptions: {},
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    disableHostCheck: true,
    open: false,
    port: PORT,
    host: '0.0.0.0',
    after: function(app, server) {
      setTimeout(() => {
        require('child_process').exec(`start http://localhost:${PORT}`);
      }, 2000);
    }
    // ,
    // proxy: {
    //   '/proxyApi': {
    //     target: PROXY_SERVER,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/proxyApi': '/'
    //     }
    //   }
    // }
  },
  // Vue-ECharts 默认在 webpack 环境下会引入未编译的源码版本，
  // 如果你正在使用官方的 Vue CLI 来创建项目，
  // 可能会遇到默认配置把 node_modules 中的文件排除在 Babel 转译范围以外的问题。请按如下方法修改配置
  transpileDependencies: ['vue-echarts', 'resize-detector']
};
