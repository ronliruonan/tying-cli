#!/usr/bin/env node
/** 以上code：声明文件 使用何种解析器 */

const inquirer = require('inquirer')

// 定义基本问答结构

// 1. 定义问题列表
// const promptList = [
//     {
//         type: 'input',
//         message: '设置用户名',
//         name: 'username',
//         default: 'tryname'
//     },
//     {
//         type: 'input',
//         message: '随便id',
//         name: 'id',
//         validate: (val) => {
//             if(val.match(/^\d{6}$/ig)) {
//                 return !0;
//             }
//             return '请输入6位id';
//         }
//     }
// ]

// 定义 是/否 选择问题列表
// const promptList = [
//     {
//         type: 'confirm',
//         message: '是否watch',
//         name: 'watch',
//         prefix: '🌹'
//     },
//     {
//         type: 'confirm',
//         message: '是否watch',
//         name: 'more-watch',
//         suffix: '🦍',
//         when: (answers) => {
//             if (answers.watch) {
//                 return !0;
//             } else return !1;
//         }
//     }
// ];

// // 定义 问题列表 单选模式
// const promptList = [
//     {
//         type: 'list',
//         message: 'list radio',
//         name: 'tech',
//         choices: [ 'vue', 'react', 'angular ']
//     }
// ];

// // 定义 问题列表 多选模式
// const promptList = [
//     {
//         type: 'checkbox',
//         message: 'list check',
//         name: 'tech',
//         choices: [ 'vue', 'react', 'angular '],
//         pageSize: 2
//     }
// ];

// 定义 密码
const promptList = [
    {
        type: 'password',
        message: 'list check',
        name: 'tech',
    },
    {
        type: 'editor',
        message: 'text',
        name: 'text'
    }
];

// 2. 获取答案
inquirer.prompt(promptList).then(answers => {
    console.log(answers)
})