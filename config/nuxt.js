'use strict'

const { resolve } = require('path')

module.exports = {
  srcDir: resolve(__dirname, '..', 'resources'),
  dev: process.env.NODE_ENV === 'development',
  mode: 'spa',
  router: {
    base: '/admin/'
  }
}
