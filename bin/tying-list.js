#!/usr/bin/env node

// 交互模块
const inquirer = require('inquirer');
// 颜色模块
const chalk = require('chalk');
// path 模块
const path = require('path');
// templates json
const tpath = path.resolve(__dirname, '../tying-template.json');
const tpls = require(tpath);

[].forEach.call(tpls, v => {
    console.log(chalk`模板名称: {green ${v.name}}, 地址：{yellow ${v.url}}`)
});