'use strict'

const { Command } = require('@adonisjs/ace')
const { Builder } = require('nuxt')

class NuxtBuild extends Command {
  static get signature() {
    return 'nuxt:build'
  }

  static get description() {
    return 'Build the admin for the site.'
  }

  async handle(args, options) {
    const nuxt = use('Service/Nuxt')
    this.info('Building nuxt.js application...')
    await new Builder(nuxt).build()
  }
}

module.exports = NuxtBuild
