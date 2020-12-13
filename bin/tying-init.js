#!/usr/bin/env node

// 命令行模块
const { program } = require('commander');
const download = require('download-git-repo');
// ora 加载模块
const ora = require('ora');
// 引入交互式模块
const inquirer = require('inquirer');
// 引入文件操作, path
const fs = require('fs');
const path = require('path');
// templates json
const tpath = path.resolve(__dirname, '../tying-template.json');
const tpls = require(tpath); // 数组格式
const chalk = require('chalk');


// 定义tying init <tempalte-name> [project-name]
program
    .usage('<template-name> [project-name]')
    .parse(process.argv);

// 当没有输入参数是，提供命令help，tying init
if (program.args.length < 1) {
    program.help();
    return;
}

// 获取用户输入的参数
let tName = program.args[0];
let pName = program.args[1];

// 校验模板名称
if (![].find.call(tpls, i => i.name === tName)) {
    console.log(chalk.red('模板名称不存在，可使用tying list查看'));
    return;
}

// 校验项目名称是否存在
if (!pName) {
    console.log(chalk.red('项目名称非法，不能为空'))
    return;
}

// 获取模板地址
let url = [].find.call(tpls, i => i.name === tName).url;

// 开始创建项目
console.log(chalk.yellow('开始创建项目'));
// 加载图标
const spinner = ora('下载拉取中...');
spinner.start();

download(url, pName, err => {
    if (err) {
        spinner.fail();
    }
})