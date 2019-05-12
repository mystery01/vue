// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  // "plugins": {
  //   "postcss-import": {},
  //   "postcss-url": {},
  //   // to edit target browsers: use "browserslist" field in package.json
  //   "autoprefixer": {}
  // }
  "plugins": {
    "postcss-px-to-viewport": true
  },
  "rule": {
    "postcss-px-to-viewport": {
      "viewportWidth": 375,        //设置视觉设计稿的宽度
      "viewportHeight": 667,       //设置视觉设计稿的高度
      "unitPrecision": 5,      //单位的精度，即保留多少位小数
      "viewportUnit": "vw",       //转换的单位
      "selectorBlackList": [],  //需要忽略的选择器
      "minPixelValue": 1,       //最小像素值
      "mediaQuery": false         //是否允许媒体查询转换为 px
    }
  }
}
