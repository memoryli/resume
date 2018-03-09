require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
var program = require('commander')

// 获取命令行参数
program
  .version('0.0.1')
  .option('-s, --start', 'Start Service')
  .option('-p, --port', 'Service Port')
  .option('-w, --war', 'war package')
  .parse(process.argv)
// 是否需要启动服务
var isNeedStart = program.start
// 服务的端口号
var port = program.port || 9999
// 是否需要打war包
var isWar = program.war

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.prod.assetsRoot, config.prod.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))

    // 启动测试环境的服务
    if(isNeedStart){
      var express = require('express')
      var app = express()
      app.use(express.static(path.resolve(__dirname , '../dist/prod')));
      app.listen(port)
      console.log(chalk.cyan('启动生产服务，端口号为:'+port))
      var opn = require('opn')
      var uri = 'http://localhost:' + port +'?channel=test&visitor=&ecif='
      opn(uri)
    }

    // 打war包
    if(isWar){
      var {exec} = require('child_process')
      exec(path.resolve(__dirname , './prod-war.sh'), function (err, stdout, stderr) {
        if(err){
          console.error(err)
        }else{
          console.log(chalk.cyan('打war包成功, 路径: dist/prod.war'))
        }
      });
    }
  })
})
