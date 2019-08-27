'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const testEnv = require('./test.env')

module.exports = merge(testEnv, merge(prodEnv, {
  NODE_ENV: '"development"'
}))
