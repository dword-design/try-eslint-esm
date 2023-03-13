const jiti = require('jiti')
const jitiInstance = jiti(__filename, { interopDefault: true })

module.exports = jitiInstance('./eslint-config.mjs')
