#!/usr/bin/env node
/** 以上code：声明文件 使用何种解析器 */

const boxen = require('boxen')
console.log(boxen('hi try', {padding: 1, margin: 1, borderStyle: 'classic'}))

// /**
//  * process.argv return Array
//  * 第一个参数：node 可行性文件绝对就路径
//  * 第二个参数：当前执行文件路径
//  * 第三个参数及以后：就是我们命令行的传参
//  */
//  process.argv.forEach(v => {
//      console.log(v)
//  })

const { program } = require('commander')

// 这里可以参考vue的读取package.json中的version来搞定
program
    .version('0.0.1')
    .usage('<commond> [try options]')
    .option('flags', 'desc', 'default')
    .option('-cr, --classroom <custom name>', 'current name', 'try room')
    .command('add', 'add a try template')
    .command('init', 'init a try template')
    .command('create [options] <app-name>', 'create a template')
    .parse(process.argv)

console.log(program.classroom)