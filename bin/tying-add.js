#!/usr/bin/env node

// 引入问答交互模块
const inquirer = require('inquirer')
// 引入文件操作模块
const fs = require('fs')
// 引入路径操作
const path = require('path')
// tying-template.json路径
const tpath = path.resolve(__dirname, '../tying-template.json')
// 获取模板列表内容
let tyingTlps = require(tpath) // 默认 []



// 定制问答环节
let questions = [
    {
        type: 'input',
        name: 'tpl-name',
        message: '请输入模板名称'
    },
    {
        type: 'input',
        name: 'tpll-git',
        message: '请输入git url'
    }
]

// 交互式回答 add 信息处理
inquirer
    .prompt(questions).then(answers => {
        console.log(answers)
        // 获取问答内容
        let tplName = answers['tpl-name']
        let tplGit = answers['tpl-git']

        // 更新到tying-template.json中
    })