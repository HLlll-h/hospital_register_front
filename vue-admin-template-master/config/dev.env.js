'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
    BASE_API: '"http://localhost"', //修改路径  但不能写死  解决方法1：Nginx 2：gateway
})