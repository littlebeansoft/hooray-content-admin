/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_STORAGE_VERSION: string

    // API Endpoints
    REACT_APP_GRAPHQL_CORE_ENDPOINT: string
  }
}
