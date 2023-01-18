require('dotenv').config({
  path: '.env.development',
})

const path = require('node:path') 

const gqlPath = path.resolve(__dirname, '..', 'src', 'shared', 'api', 'gql')

const typesPath = path.resolve(gqlPath, 'types.generated.ts')
console.log(process.env.REACT_APP_GQL_URL);

const config = {
  schema: process.env.REACT_APP_GQL_URL,
  documents: gqlPath+'/*.graphql',
  config: {
    namingConvention: {
      typeNames: 'change-case-all#pascalCase',
      enumValues: 'change-case-all#upperCase',
      transformUnderscore: true,
    },
  },
  generates: {
    [typesPath]: {
      plugins: ['typescript'],
    },
    [gqlPath]: {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: './types.generated.ts',
      },
      plugins: [
        'typescript-operations',
        {
          'typescript-rtk-query': {
            importBaseApiFrom: '../gql-base.api',
            exportHooks: true,
          },
        },
      ],
    },
  },
}
module.exports = config
