'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const { Nuxt, Builder } = require('nuxt')

class NuxtProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register() {
    this.app.singleton('Service/Nuxt', () => {
      const config = this.app.use('Config').get('nuxt')
      return new Nuxt(config)
    })
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  async boot() {
    const Helpers = this.app.use('Helpers')
    if (!Helpers.isAceCommand()) {
      const nuxt = this.app.use('Service/Nuxt')
      if (nuxt.options.dev) {
        await new Builder(nuxt).build()
      } else {
        await nuxt.ready()
      }
    }
  }
}

module.exports = NuxtProvider
