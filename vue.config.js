// Config Reference: https://cli.vuejs.org/zh/config/
// webpack可视化分析工具
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// 引入颜色值批量替换模块
const ThemeColorReplacer = require("webpack-theme-color-replacer");
const forElementUI = require("webpack-theme-color-replacer/forElementUI");
// 引入gzip压缩插件
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  /* publicPath默认是/，部署前根据远端路径进行调整 */
  // publicPath: process.env.NODE_ENV === "production" ? "/vue-starter/" : "/",
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    openPage: "#/login",
    port: 8080, // 配置端口号
    // DevServer 默认只接受来自本地的请求，关闭后可以接受来自任何 HOST 的请求。 
    // 它通常用于搭配--host 0.0.0.0使用，因为你想要其它设备访问你本地的服务，但访问时是直接通过 IP 地址访问而不是 HOST 访问，所以需要关闭 HOST 检查。
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://api.douban.com/",
        changeOrigin: true,
      },
    },
  },
  configureWebpack: (config) => {
    // 不管什么环境，都使用颜色替换插件
    config.plugins.push(
      //生成仅包含颜色的替换样式（主题色等）如果不想随便改变主题色，就注释掉下面的代码
      new ThemeColorReplacer({
        // 官网的文件名，会导致编译后的文件名不对：fileName: 'css/theme-colors-[contenthash:8].css'
        // 不要添加 [contenthash:8]
        fileName: "css/theme-colors.css",
        matchColors: [...forElementUI.getElementUISeries("#7367f0")], //需要替换的颜色数组，里面都是目标颜色
        changeSelector: forElementUI.changeSelector,
      })
    )
    // 如果带有 --report 就开启可视化服务
    if (process.env.NODE_ENV === "production" && process.env.npm_config_report) {
      config.plugins.push(new BundleAnalyzerPlugin())
    }
    // 如果是生产环境
    if (process.env.NODE_ENV === 'production') {
      // 构建的时候可以开启gzip压缩，生成.gz压缩文件，这样服务器上就不用自己压缩了，
      // 也可以不开启，那样的话，服务器就得压缩了
      // config.plugins.push(
      //   new CompressionPlugin({
      //     test: /\.(css|js)$/,
      //     threshold: 10240, // 对超过10kb的数据进行压缩
      //   })
      // )
    } else {
      // 如果是开发环境
    }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      //   sass: {
      // @/ 是 src/ 的别名
      // 所以这里假设你有 `src/variables.sass` 这个文件
      // 注意：在 sass-loader v7 中，这个选项名是 "data"
      // prependData: `@import "~@/variables.sass"`
      //   },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `data` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: `@import "~@/assets/scss/global.scss";`,
      },
    },
  },
};
