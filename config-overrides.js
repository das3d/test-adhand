const {alias, configPaths} = require('react-app-rewire-alias')

const aliasMap = configPaths('./tsconfig.paths.json')

module.exports = function override(config) {
  const modifiedConfig = alias({
    '@pages': 'src/pages',
    '@features': 'src/features',
    '@entities': 'src/entities',
    '@app': 'src/app',
    '@widgets': 'src/widgets',
    '@processes': 'src/processes',
    '@blockchain': 'src/blockchain',
    '@shared': 'src/shared',
    '@': 'src/',

  })(config)

  modifiedConfig.module.rules[1].oneOf.splice(0, 0, {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  })

  return modifiedConfig
}

module.exports.jest = function override(config) {
  const modifiedConfig = aliasJest(aliasMap)(config)
  return modifiedConfig
}
