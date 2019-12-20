// Config Reference: https://cli.vuejs.org/zh/config/
// 编译文件可视化工具
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
// 引入颜色值批量替换模块
const ThemeColorReplacer = require("webpack-theme-color-replacer");
const forElementUI = require("webpack-theme-color-replacer/forElementUI");

module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 8080, // 配置端口号
    // 配置代理
    proxy: {
      v2: {
        target: "http://api.douban.com/",
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    // 如果带有 --report 就开启可视化服务
    if (
      process.env.NODE_ENV === "production" &&
      process.env.npm_config_report
    ) {
      return {
        plugins: [new BundleAnalyzerPlugin()]
      };
    } else {
      // 为开发环境修改配置...
      return {
        plugins: [
          //生成仅包含颜色的替换样式（主题色等）
          new ThemeColorReplacer({
            // 官网的文件名，会导致编译后的文件名不对：fileName: 'css/theme-colors-[contenthash:8].css'
            // 不要添加 [contenthash:8]
            fileName: "css/theme-colors.css",
            matchColors: [...forElementUI.getElementUISeries("#7367f0")], //需要替换的颜色数组，里面都是目标颜色
            changeSelector: forElementUI.changeSelector
          })
        ]
      };
    }
  }
};
