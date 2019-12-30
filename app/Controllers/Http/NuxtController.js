'use strict'

// const { Nuxt, Builder } = require("nuxt");

// Require Nuxt config
// const config = require("../../../config/nuxt");

class NuxtController {
  constructor() {
    this.nuxt = use('Service/Nuxt')
  }

  async render({ request, response, session }) {
    await session.commit()

    response.implicitEnd = false

    await session.commit()

    return await new Promise((resolve, reject) => {
      this.nuxt.render(request.request, response.response, promise => {
        promise.then(resolve).catch(reject)
      })
    })
  }
}

module.exports = new NuxtController()
