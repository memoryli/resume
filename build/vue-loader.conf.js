var utils = require('./utils')
var config = require('../config')
// var isProduction = process.env.NODE_ENV === 'production'

var sourceMap = process.env.NODE_ENV === 'production'? config.prod.productionSourceMap
  :(process.env.NODE_ENV === 'testing'? config.test.productionSourceMap : config.dev.cssSourceMap)
var isExtract = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'testing'

var px2remConfig = {
  baseDpr: 1,             // base device pixel ratio (default: 2)
  remUnit: 75,            // rem unit value (default: 75)
  remPrecision: 6,        // rem value precision (default: 6)
  forcePxComment: 'px',   // force px comment (default: `px`)
  keepComment: 'no',       // no transform value comment (default: `no`)
  shouldUseDprRule: function(rule){
    var list = ['font', 'font-size'];
    return list.some(function(item) {
      return item === rule.property;
    })
  },
  shouldIgnoreRule: function(rule) {
    return  /border/.test(rule.property);
  }
}

module.exports = {
  loaders: utils.cssLoaders({
    /* sourceMap: isProduction
     ? config.build.productionSourceMap
     : config.dev.cssSourceMap,
     extract: isProduction */
    sourceMap: sourceMap,
    extract: isExtract
  }),
  postcss: [
    require('postcss-px2rem-dpr')( px2remConfig )
  ],
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
