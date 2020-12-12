#!/usr/bin/env node
/** 以上code：声明文件 使用何种解析器 */

const ora = require('ora')

const spinner = ora('开始...').start()

spinner.color = 'red'

setTimeout(() => {
    spinner.stop();
    spinner.succeed('红锡类')
    spinner.fail('啊呀呀')
    spinner.warn('下载遇到问题')
    spinner.info('hello')
}, 1000 * 2.5)