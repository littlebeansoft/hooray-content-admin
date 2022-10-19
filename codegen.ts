import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    'https://kara-core-service.hooray.site/graphql/admin/v1.0',
    'https://kara-core-service.hooray.site/graphql/system-admin/v1.0',
    'http://kara-content-service.hooray.site/graphql',
  ],
  documents: 'src/**/*.tsx',
  generates: {
    'src/gql': {
      preset: 'client',
      plugins: [],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
