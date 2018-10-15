// Config Reference: https://cli.vuejs.org/zh/config/

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
  }
}