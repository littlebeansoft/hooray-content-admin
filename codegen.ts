import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: ['https://kara-core-service.hooray.site/graphql/admin/v1.0'],
  ignoreNoDocuments: true,
  documents: 'src/graphql/documents/**/*.graphql',
  generates: {
    'src/graphql/__generated/operations.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
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
