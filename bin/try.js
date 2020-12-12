#!/usr/bin/env node
/** 以上code：声明文件 使用何种解析器 */

const { program } = require('commander')

program
    .version('1.0.0')
    .usage('<command> [try options]')
    .command('add', 'add a new template')
    .command('delete', 'deleate a template')
    .command('list', 'list templates')
    .command('init', 'generate a project')
    .parse(process.argv)
