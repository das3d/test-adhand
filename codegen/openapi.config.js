require('dotenv').config({
  path: '.env.development',
})

const path = require('node:path') 

const controllersPath = path.resolve(__dirname, '..', 'src', 'shared', 'api', 'controllers')

const IS_POSTMAN = process.argv.includes('postman')
const POSTMAN_URL = 'postman.json'

// TODO set up normal process env variables
const SWAGGER_URL = process.env.REACT_APP_SWAGGER_URL 
|| 
// pass swagger url here
''

/**
 * @tutorial
 * https://redux-toolkit.js.org/rtk-query/usage/code-generation
 */
const config = {
  apiFile: '@shared/api/base.api.ts',
  apiImport: 'baseApi',
  schemaFile: IS_POSTMAN ? POSTMAN_URL : SWAGGER_URL,
  flattenArg: true,
  
  /**
   * @example
   * './controllers/auth.api.ts': {
   * filterEndpoints: [/authController/]
   * }
   */
  outputFiles: {
    [`${controllersPath}/auth.api.ts`]: {},
  },
  hooks: true,
  tag: true,
}

module.exports = config
