const got = require('got');

const create = () => got.extend({
  prefixUrl: process.env.SENTRY_ENDPOINT || 'https://sentry.io',
  headers: {},
  responseType: 'json',
  token: process.env.SENTRY_TOKEN,
  handlers: [
    (options, next) => {
      if (options.token) {
        options.headers.authorization = `Bearer ${options.token}`
      }
      return next(options)
    }
  ]
})

module.exports = create();
