#!/usr/bin/env node

// 引入交互式模块
const inquirer = require('inquirer');
// 引入文件操作, path
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
// templates json
const tpath = path.resolve(__dirname, '../tying-template.json');
const tpls = require(tpath); // 数组格式

// 引入选择问答
let questions = [
    {
        type: 'checkbox',
        message: '可多选择要删除的模板',
        name: 'tpl-names',
        choices: tpls.map(i => i.name),
        // pageSize: 2
    }
];

// 交互信息处理
inquirer
    .prompt(questions).then(answers => {
        console.log('');
        console.log(tpls)
        console.log(answers);
        
        answers['tpl-names'].forEach(i => {
          [].splice.call(tpls, tpls.findIndex(j => j.name === i), 1);   
        });
        console.log('');
        console.log(tpls);

        fs.writeFileSync(tpath, JSON.stringify(tpls));
        console.log(chalk`删除成功`)
    });
