const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
  }
}