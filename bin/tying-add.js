#!/usr/bin/env node

// 引入问答交互模块
const inquirer = require('inquirer');
// 引入文件操作模块
const fs = require('fs');
// 引入路径操作
const path = require('path');
// tying-template.json路径
const tpath = path.resolve(__dirname, '../tying-template.json');
// 获取模板列表内容
let tyingTlps = require(tpath); // 默认 []



// 定制问答环节
let questions = [
    {
        type: 'input',
        name: 'tpl-name',
        message: '请输入模板名称',
        // 校验 必填，且不能重复
        validate: (val) => {
            const v = `${val}`.trim();
            if (v === '') return '模板名称不能为空';
            if (tyingTlps.find(i => i.name === v)) return '当前模板名称已存在';

            return true;
        }
    },
    {
        type: 'input',
        name: 'tpl-url',
        message: '请输入 url',
        // 校验必填
        validate: (val) => {
            if (val === '') return '模板路径不能为空';

            return true;
        }
    }
];

// 交互式回答 add 信息处理
inquirer
    .prompt(questions).then(answers => {
        console.log(answers);
        // 获取问答内容
        let tplName = answers['tpl-name'];
        let tplUrl = answers['tpl-url'];

        // 更新到tying-template.json中
        tyingTlps.push({
            name: tplName,
            url: tplUrl
        });

        // 更新 tpl文件内容
        fs.writeFileSync(tpath, JSON.stringify(tyingTlps));
    });