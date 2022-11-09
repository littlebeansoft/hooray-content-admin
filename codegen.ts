import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    'https://kara-core-service.hooray.site/graphql/admin/v1.0',
    'https://kara-content-service.hooray.site/graphql',
    'https://kara-label-service.hooray.site/graphql',
  ],
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
        namingConvention: {
          typeNames: 'change-case-all#pascalCase',
          enumValues: 'change-case-all#pascalCase',
        },
        addOperationExport: true,
        flattenGeneratedTypes: true,
      },
    },
  },
}

export default config
