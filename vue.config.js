// Config Reference: https://cli.vuejs.org/zh/config/
// 编译文件可视化工具
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 8080, // 配置端口号
    host: 'localhost',
    https: false,
    open: true, // 配置自动启动浏览器
    // 配置代理
    proxy: {
      '/api/v1': {
        target: 'http://xxxx:8888/',
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    // 如果带有 --report 就开启可视化服务
    if (process.env.NODE_ENV === 'production' && process.env.npm_config_report) {
      return {
        plugins: [
          new BundleAnalyzerPlugin()
        ]
      }
    } else {
      // 为开发环境修改配置...
    }
  }
}