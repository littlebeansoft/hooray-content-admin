import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    'https://kara-core-service.hooray.site/graphql/admin/v1.0',
    'http://kara-content-service.hooray.site/graphql',
  ],
  ignoreNoDocuments: true,
  documents: 'graphql/documents/**/*.graphql',
  generates: {
    'graphql/__generated/operations.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        avoidOptionals: {
          field: true,
        },
        maybeValue: 'T',
        skipTypename: true,
        skipTypeNameForRoot: true,
        useTypeImports: true,
      },
    },
  },
}

export default config
